let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number)
const dp = []

for(let i = 0; i<k; i++) {
  dp.push(Array(n+1).fill(i === 0 ? 1:0))
  dp[i][0] = 1
}

for(let i = 1; i<k; i++) {
  for(let j = 1; j<=n; j++) {
    dp[i][j] = dp[i-1].slice(0, j+1).reduce((a,b)=> a + b) % 1000000000
  }
}

console.log(dp[k-1][n])
