const produce = require("./producer");
const consume = require("./consumer");

// call the produce function and log an error if it occurs
produce().catch((err) => {
    console.error("error in producer: ", err);
});

consume().catch((err) => {
    console.error("error in consumer: ", err);
});