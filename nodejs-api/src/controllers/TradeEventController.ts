import { Request, Response } from 'express';
import { MySqlTradeEventRepository } from '../repositories/implementations/MySqlTradeEventRepository';

export class TradeEventController {
    constructor(private repository: MySqlTradeEventRepository) {

    }

    async get(request: Request, response: Response): Promise<Response> {
        try {
            const { clientId } = request.params;
            const data = await this.repository.findById(+clientId);
            
            return data ? response.status(200).json(data) : response.status(204);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            })
        }
    }
}