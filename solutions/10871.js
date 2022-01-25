let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = input[0].split(" ");

let count = Number(n[0]);
let number = Number(n[1]);

let arr = input[1].split(" ").map((x) => Number(x));

let result = "";

for (let i = 0; i < count; i++) {
  if (arr[i] < number) {
    result += `${arr[i]} `;
  }
}

console.log(result);
