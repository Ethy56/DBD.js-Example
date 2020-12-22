const { defaultcolor, owner }  = require("C:/Users/ethy56/Desktop/dbd.js-example/config.json"); // optional, if you dont use this then replace ${defaultcolor} with your color choice and ${owner} with a user id
module.exports = ({ // commands contructor
    name: "bal", // command name, used to run as <prefix>bal
    code: `$title[$username[$findUser[$message]]'s Balance!]
    $color[${defaultcolor}]
    $description[**Cash:** \`$getUserVar[money;$findUser[$message]]\`]
    ` // the code for the command
});