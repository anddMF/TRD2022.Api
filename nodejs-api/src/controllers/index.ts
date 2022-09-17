import { MySqlTradeEventRepository } from '../repositories/implementations/MySqlTradeEventRepository';
import { TradeEventController } from './TradeEventController';

const repository = new MySqlTradeEventRepository;
const tradeController = new TradeEventController(repository);

export { tradeController };