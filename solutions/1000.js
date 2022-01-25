let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const number = input.toString().split(" ");

const a = parseInt(number[0]);
const b = parseInt(number[1]);

console.log(a + b);
