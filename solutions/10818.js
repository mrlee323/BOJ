let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0])
let arr = input[1].split(' ').map(x=>Number(x))

const ma = Math.max(...arr)
const mi = Math.min(...arr)

console.log(mi, ma)

