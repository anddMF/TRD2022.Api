import { app } from './app';
import * as dotenv from 'dotenv';

app.listen(3333, () => {
    dotenv.config();
    console.log('Running on 3333');
})