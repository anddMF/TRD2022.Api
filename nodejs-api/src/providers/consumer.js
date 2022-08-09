const { Kafka } = require("kafkajs");

const clientId = "node-app";
const brokers = ["localhost:9092"];
const topic = "topic-teste";

const kafka = new Kafka({ clientId, brokers });
const consumer = kafka.consumer({ groupId: clientId });

const consume = async (request) => {
    console.log("########## OLHA O REQUEST PARAM: " + request)
    let response = [];
    await consumer.connect();
    await consumer.subscribe({ topic });
    await consumer.run({
        // this function is called every time the consumer gets a new message
        
        eachMessage: ({ topic, partition, message }) => {
            console.log('\n\n###### Received message', {
                topic,
                partition,
                key: message.key.toString(),
                value: message.value.toString()
            })
            response.push(message.value.toString());
            console.log("\n#### OLHA O RESPONSE CARAI: "+ response.length+"\n");
        }

    })
}

module.exports = consume;