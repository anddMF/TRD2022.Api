import { DataTypes, Model, ModelCtor, Op, Sequelize } from 'sequelize';
import { ITradeEventRepository } from './../ITradeEventRepository';

export class MySqlTradeEventRepository implements ITradeEventRepository {

    constructor() {}

    async findByClientId(clientId: number) : Promise<Model<any, any>[]> {
        const eventTable = this.getTableDefinition(this.getDatabase());
        
        // get the datetime from the start of the robot
        const baseDate = await eventTable.findOne({
            where: {
                ID_CLIENT: clientId,
                ID_EVENT_TYPE: 5 // 'START'
            },
            order: [
                ['MOMENT','DESC']
            ],
            attributes: ['MOMENT']
        })
        let startDate = baseDate.get();
        console.log(startDate.MOMENT);
        
        const response = await eventTable.findAll({
            where: {
                ID_CLIENT: clientId,
                MOMENT: {
                    [Op.gte]: startDate.MOMENT
                }
            },
            order: [
                ['MOMENT','DESC']
            ]
        });
        
        return response;
    }
    
    private getDatabase(): Sequelize {
        const db = new Sequelize(
            process.env.MYSQL_DATABASE,
            process.env.MYSQL_USER,
            process.env.MYSQL_PASSWORD,
            {
                dialect: "mysql",
                host: process.env.MYSQL_HOST,
                port: +process.env.MYSQL_PORT
            }
        );

        return db;
    }

    private getTableDefinition(db: Sequelize): ModelCtor<Model<any, any>> {
        const table = db.define('trd2022_event', {
            ID: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            ID_CLIENT: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            ID_EVENT_TYPE: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            ID_REC_TYPE: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            ASSET: {
                type: DataTypes.STRING,
                allowNull: true
            },
            INITIAL_PRICE: {
                type: DataTypes.DOUBLE,
                allowNull: true
            },
            FINAL_PRICE: {
                type: DataTypes.DOUBLE,
                allowNull: true
            },
            QUANTITY: {
                type: DataTypes.DOUBLE,
                allowNull: true
            },
            VALORIZATION: {
                type: DataTypes.DOUBLE,
                allowNull: true
            },
            INFO: {
                type: DataTypes.STRING,
                allowNull: true
            },
            MOMENT: {
                type: DataTypes.DATE,
                allowNull: true
            }
        }, { freezeTableName: true, timestamps: false });

        return table;
    }
}