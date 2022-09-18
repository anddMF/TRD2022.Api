import { Model } from 'sequelize';
export interface ITradeEventRepository {
    findById(id: number): Promise<Model<any, any>[]>;
}