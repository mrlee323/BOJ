let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

let result = "";
for (let i = 1; i <= n; i++) {
  result += `${i} \n`;
}
console.log(result);
