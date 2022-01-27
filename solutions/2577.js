let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = (input[0] * input[1] * input[2])
let arr = String(n).split('').map(x=>Number(x))

for(let i = 0; i <10; i++) {
  let sum =arr.filter(a => a === i).length
  console.log(sum)
}
