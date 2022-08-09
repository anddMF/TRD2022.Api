const produce = require("./providers/producer");
const consume = require("./providers/consumer");

// call the produce function and log an error if it occurs
await produce().catch((err) => {
    console.error("error in producer: ", err);
});

consume("MANDEI PARAM").catch((err) => {
    console.error("error in consumer: ", err);
});