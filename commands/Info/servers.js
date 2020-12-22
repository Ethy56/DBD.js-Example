const { defaultcolor, owner }  = require("C:/Users/ethy56/Desktop/dbd.js-example/config.json"); // optional, if you dont use this then replace ${defaultcolor} with your color choice and ${owner} with a user id
module.exports = ({ // commands contructor
    name: "servers", // command name, used to run as <prefix>servers
    code: `$title[Servers: \`$serverCount\`]
    $color[${defaultcolor}]
    $thumbnail[$userAvatar[$clientID]]
    $footer[Created by: $userTag[${owner}]]
    ` // the code for the command
});