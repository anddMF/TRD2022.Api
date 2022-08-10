import { Router } from "express";
import { KafkaProvider } from "./providers/KafkaProvider";

const router = Router();
const kafka = new KafkaProvider();

router.get('/events', (request, response) => {
    return response.json(kafka.consume("PARAM TESTE"));
});

export { router };