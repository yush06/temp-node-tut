//Common JS, Every file is module by default
// Modules - Encapsulated code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternate");
require("./7-mind-grenade");

sayHi(names.john);
sayHi(names.peter);
