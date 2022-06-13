const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input.shift())
const dp = input.map(Number)

for(let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i], dp[i] * dp[i-1])
}

console.log(Math.max(...dp).toFixed(3))
