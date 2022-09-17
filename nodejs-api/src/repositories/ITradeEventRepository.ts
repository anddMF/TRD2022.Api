import { TradeEvent } from './../entities/TradeEvent';
export interface ITradeEventRepository {
    findById(): Promise<TradeEvent>;
}