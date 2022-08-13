import { KafkaProvider } from '../providers/KafkaProvider';
import { KafkaController } from './kafkaController';

const kafkaProvider = new KafkaProvider;
const kafkaController = new KafkaController(kafkaProvider);

export { kafkaController };