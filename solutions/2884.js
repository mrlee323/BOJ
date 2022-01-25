let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let hour = Number(input[0].split(" ")[0]);
let minute = Number(input[0].split(" ")[1]);

if (minute >= 45) {
  minute -= 45;
} else {
  hour -= 1;
  minute = minute + 15;
  if (hour == -1) {
    hour = 23;
  }
}

console.log(hour, minute);
