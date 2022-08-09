const { Kafka } = require('kafkajs');

// who's producing the message
const clientId = "node-app";
const brokers = ["localhost:9092"];
const topic = "topic-teste";

const kafka = new Kafka({ clientId, brokers });
const producer = kafka.producer();

// function to produce messages e
const produce = async () => {
    await producer.connect();
    let i = 0;

    setInterval(async () => {
        try {
            await producer.send({
                topic, 
                messages: [
                    {
                        key: String(i),
                        value: "mensagem de numero "+ i
                    }
                ]
            });

            console.log("### messages sent: " + i);
            i++;
        } catch (err) {
            console.error("error writing message: ", err)
        }
    }, 3000)
};

module.exports = produce;