//learning some built-in modules os, FS, HTTP ,path
//npm - global command, comes with node
// npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo install -g <packageName>

//package.json - manifest file (stores important info about project/package)

const _=require('lodash');

const items =[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log(newItems);
