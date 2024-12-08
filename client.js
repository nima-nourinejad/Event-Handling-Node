const network = require("./network");

const client = (message)=>{
	network.emit("message", { message });
}

module.exports = client;