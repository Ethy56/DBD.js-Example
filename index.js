const DBD = require("dbd.js"); // allows for you to use dbd.js's functionality

const config = require("./config.json"); // pulls information from config.json
 
const bot = new DBD.Bot({ // starts bot contructor
	
	token: config.token, // token from config.json
	
	prefix: config.prefix // prefix from config.json

}); // ends bot constructor
 
bot.onMessage(); // required for commands to be run via messages
 
const fs = require('fs'); // module to have commands be in seperate files

const allfolders = fs.readdirSync("./commands/"); // pulls files from commands folder

for (const afolder of allfolders) { // for each folder in commands folder

	const folder = fs.readdirSync(`./commands/${afolder}/`); // filters to leave only files that end in .js

	for (const file of folder) { // for each file after filter in folder
		
		const command = require(`./commands/${afolder}/${file}`); // defines command as a file from folder
		
		bot.command({ // starts command contructor
		
			name: command.name, // commands name from the commands file
		
			code: command.code // commands code from the commands file
		
		}); // ends command contructor
	
	} // ends for each file after filter in folder

}// ends for each file in commands folder

bot.variables({ // creates variables for bot to use
	money: 0, // makes variable money with defualt value 0
})