import { Router } from "express";
import {tradeController} from "./controllers/index"

const router = Router();

router.get('/events/:clientId', (request, response) => {
    return tradeController.get(request, response);
});

export { router };