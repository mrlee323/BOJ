const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input.shift())
const arr = input[0].split(' ').map(Number).reverse()

const dp = Array(n).fill(1)

for(let i = 1; i < n; i++) {
  for(let j = 0; j<i; j++) {
    if(arr[j] < arr[i]){
      dp[i] = Math.max(dp[i], dp[j] + 1)
    }
  }
}

console.log(n - Math.max(...dp))
