import { Model } from 'sequelize';
export interface ITradeEventRepository {
    findByClientId(clientId: number): Promise<Model<any, any>[]>;
}