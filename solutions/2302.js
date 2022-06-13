const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input.shift())
const m = Number(input.shift())

let d = Array(50).fill(0)

d[0] = 1
d[1] = 1
d[2] = 2

function dp (x) {
  if(d[x] != 0) return d[x]
  d[x] = dp(x-1) + dp(x-2)
  return d[x]
}

let arr = []
let start = 0
for(let i = 0; i<m; i++) {
  let end = Number(input[i])
  arr.push(end - start - 1)
  start = end
}
arr.push(n - start)

let result = arr.reduce((acc,cur)=> acc *dp(cur),1)

console.log(result)
