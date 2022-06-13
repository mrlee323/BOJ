const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input.shift())
const t = []
const p = []
let maxValue = 0

const dp = Array(n+1).fill(0)

for(let i = 0; i < n; i++) {
  let[x, y] = input[i].split(' ').map(Number)
  t.push(x)
  p.push(y)
}
for(let i = n-1; i>=0; i--){
  let time = t[i] + i
  if(time <= n) {
    dp[i] = Math.max(p[i] + dp[time], maxValue)
    maxValue = dp[i]
  } else {
    dp[i] = maxValue
  }
}

console.log(maxValue)
