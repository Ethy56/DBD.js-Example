const { owner }  = require("C:/Users/ethy56/Desktop/dbd.js-example/config.json"); // optional, if you dont use this then replace ${owner} with your id
module.exports = ({ // commands contructor
    name: "eval", // command name, used to run as <prefix>eval <text>
    code: `
    $eval[$message]
    $onlyIf[$message!=;Say something to eval!]
    $onlyIf[$authorID==${owner};You can not do this!]
    ` // the code for the command
});