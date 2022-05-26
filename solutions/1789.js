let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let n = Number(input[0])
let count = 1

while(count * (count+1) / 2 <= n){
  count++
}

console.log(count-1)
