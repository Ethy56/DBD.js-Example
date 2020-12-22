const { defaultcolor, owner }  = require("C:/Users/ethy56/Desktop/dbd.js-example/config.json"); // optional, if you dont use this then replace ${defaultcolor} with your color choice as well as ${owner} with a user id
module.exports = ({ // commands contructor
    name: "stats", // command name, used to run as <prefix>stats
    code: `$title[$username[$clientID] Stats!]
    $color[${defaultcolor}]
    $description[**Uptime:** \`$uptime\`
    **Ping:** \`$pingms\`
    **Servers:** \`$serverCount\`
    **Shard ID:** \`$shardID\`]
    $thumbnail[$userAvatar[$clientID]]
    $footer[Created by: $userTag[${owner}]]
    ` // the code for the command
});