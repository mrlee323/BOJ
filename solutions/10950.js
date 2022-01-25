let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  const data = input[i].split(" ");
  const a = Number(data[0]);
  const b = Number(data[1]);
  console.log(a + b);
}
