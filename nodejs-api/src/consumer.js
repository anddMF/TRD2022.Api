const { Kafka } = require("kafkajs");

const clientId = "node-app";
const brokers = ["localhost:9092"];
const topic = "topic-teste";

const kafka = new Kafka({clientId, brokers});
const consumer = kafka.consumer({groupId: clientId});

const consume = async () => {
    await consumer.connect();
    await consumer.subscribe({topic});
    await consumer.run({
        // this function is called every time the consumer gets a new message
        eachMessage:({message}) => {
            console.log(`received message: ${message.value}`);
        }
    })
}

module.exports = consume;