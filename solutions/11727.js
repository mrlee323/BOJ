const fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n');

const n = Number(input[0])
const d = Array(1001).fill(0)

d[1] = 1
d[2] = 3

for(let i = 3; i <= n; i++ ) {
  d[i] = (d[i-1] + 2 * d[i-2]) % 10007
}

console.log(d[n])
