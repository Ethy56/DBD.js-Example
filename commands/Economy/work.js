const { defaultcolor, owner }  = require("C:/Users/ethy56/Desktop/dbd.js-example/config.json"); // optional, if you dont use this then replace ${defaultcolor} with your color choice and ${owner} with a user id
module.exports = ({ // commands contructor
    name: "work", // command name, used to run as <prefix>work
    code: `$title[$username Worked!]
    $color[${defaultcolor}]
    $description[You worked as a $randomText[Developer;Programmer;Chef;Doctor] and got $random[10;100]]
    $setUserVar[money;$sum[$getUserVar[money];$random[10;100]]]
    $cooldown[10m;You can work again in %time%]
    ` // the code for the command
});