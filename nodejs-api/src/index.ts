import { KafkaProvider } from './providers/KafkaProvider'

const provider = new KafkaProvider();
// call the produce function and log an error if it occurs
provider.produce().catch((err) => {
    console.error("\n\n###### Error no produce INDEX: ", err);
});

provider.consume("MANDEI PARAM").catch((err) => {
    console.error("error in consumer: ", err);
});