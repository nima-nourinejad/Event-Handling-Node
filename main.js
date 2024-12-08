const server = require("./server");
const client = require("./client");

server();
client("This message is from the client");