let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let data = Number(input[0]);
const result = data;
let count = 0;

while (true) {
  data = String(data);
  if (data.length === 1) {
    data = `0${data}`;
  }

  let sum = Number(data[0]) + Number(data[1]);
  data = data[1] * 10 + (sum % 10);
  count++;

  if (data === result) {
    console.log(count);
    break;
  }
}
