import { Request, Response } from 'express';
import { KafkaProvider } from '../providers/KafkaProvider';

export class KafkaController {
    constructor(private kafkaProvider: KafkaProvider) {

    }

    async get(request: Request, response: Response): Promise<Response> {
        try {
            await this.kafkaProvider.consume(request).then( x => {
                console.log('\n\n######## RESPOSTA NA CONTROLLER', x)
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error'
            })
        }
    }
}