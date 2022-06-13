const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


const [n ,m] = input[0].split(' ').map(Number)

const dp = Array(n).fill(1).map((_,i)=> Array(i+1).fill(1))

for(let i = 2; i < n; i++) {
  for(let j = 1; j<i; j++) {
    dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
  }
}

console.log(dp[n-1][m-1])
