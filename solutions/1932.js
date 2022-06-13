const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input.shift())
const dp = input.map(x=> x.split(' ').map(Number))

for(let i = 1; i < n; i++) {
  for(let j = 0; j <= i; j++) {
    let left = 0
    let right = 0
    if(j !== 0) left = dp[i-1][j-1]
    if(j !== i) right = dp[i-1][j]
    dp[i][j] = Math.max(left,right) + dp[i][j]
  }
}

console.log(Math.max(...dp[n-1]))
