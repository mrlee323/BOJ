let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const a = parseInt(input[0]);
const value = Math.floor(a / 10);

switch (value) {
  case 10:
    console.log("A");
    break;
  case 9:
    console.log("A");
    break;
  case 8:
    console.log("B");
    break;
  case 7:
    console.log("C");
    break;
  case 6:
    console.log("D");
    break;
  default:
    console.log("F");
}
