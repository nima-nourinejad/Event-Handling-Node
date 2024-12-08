const network = require("./network");

const server = ()=>{
	network.on("message", (arg)=>{
		console.log(`Message received: ${arg.message}`);
	});
}

module.exports = server;