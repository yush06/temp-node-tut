// npm -- global command, comes with node
//npm --version

//local dependency - use it only in this particular project
//npm i package name

//global dependencies- use it in any project

//npm install -g <packagename></packagename>
//npm install -g <packagename></packagename>-- mac

//package.json - manifest files(stores information info about project/package)
//mannual appraoch (Create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip step)
//npm init -y (everything default)

const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
