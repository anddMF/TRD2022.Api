import { Request, Response } from 'express';
import { ITradeEventRepository } from '../repositories/ITradeEventRepository';

export class TradeEventController {
    constructor(private repository: ITradeEventRepository) {

    }

    async get(request: Request, response: Response): Promise<Response> {
        try {
            console.log("PARAM ANTES: ", request.params)
            const { clientId } = request.params;
            console.log("PARAM QUE PEGOU: ", clientId)

            if (+clientId <= 0)
                return response.status(400).json({ message: "Client ID cannot be zero or negative" })

            const data = await this.repository.findByClientId(+clientId);

            return data.length > 0 ? response.status(200).json(data) : response.status(204).json();
        } catch (err) {
            return response.status(500).json({
                message: err.message || 'Unexpected error'
            })
        }
    }
}