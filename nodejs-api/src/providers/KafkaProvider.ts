import { EachMessagePayload, Kafka, Message, ProducerBatch, TopicMessages } from 'kafkajs';

export class KafkaProvider {

    private clientId = 'node-app';
    private brokers = ['localhost:9092'];
    private topic = 'topic-teste';

    private kafka = new Kafka({ clientId: this.clientId, brokers: this.brokers });

    constructor() { }

    public async consume(request): Promise<void> {
        // TODO: in the future the request will come with a specific value for the topic
        let response = [];
        try {
            let consumer = this.kafka.consumer({ groupId: this.clientId });
            await consumer.connect();
            console.log("\n\n####### CONSUMER CONECTOU\n")
            await consumer.subscribe({ topic: this.topic });
            await consumer.run({
                eachMessage: async (messagePayload: EachMessagePayload) => {
                    const { topic, partition, message } = messagePayload
                    const prefix = `\n\n#### ${topic}[${partition} | ${message.offset}] / ${message.timestamp}`
                    console.log(`- ${prefix} ${message.key}#${message.value}`)
                    response.push(message.value);
                }
            })
        } catch (error) {
            console.log('\n\n####Error no consume: ', error);
        }
    }

    public async produce() {
        const producer = this.kafka.producer();
        try {
            await producer.connect();
            console.log("\n\n####### PRODUCER CONECTOU\n")
            for (let i = 0; i < 4; i++) {
                await producer.send({ topic: this.topic, messages: [{ key: '' + i, value: 'MENSAGEM NUMERO PA ' + i }] });

                console.log("\n###### mensagens enviadas " + i);
            }
        } catch (error) {
            console.log('Error no produce: ', error);
        }
    }
}
