const userInfo = require(`./information`);
var cowsay = require("cowsay");

console.log(
    cowsay.say({
        text: `My name is ${userInfo.name}  my school is ${userInfo.campus}`,
        e: "oO",
        T: "U ",
    })
);
