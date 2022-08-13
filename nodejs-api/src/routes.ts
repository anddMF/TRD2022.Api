import { Router } from "express";
import { KafkaProvider } from "./providers/KafkaProvider";
import {kafkaController} from "./controllers/index"

const router = Router();

router.get('/events', (request, response) => {
    return response.json(kafkaController.get(request, response));
});

export { router };