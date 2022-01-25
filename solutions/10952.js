let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let i = 0;
let result = "";
while (true) {
  const data = input[i].split(" ").map((x) => Number(x));
  const sum = data.reduce((a, b) => a + b, 0);
  if (sum === 0) break;
  result += `${sum} \n`;
  i++;
}
console.log(result);
