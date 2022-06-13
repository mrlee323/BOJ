const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const memo = Array.from(Array(31), ()=> Array(31).fill(0))
const answer = []

for(let i = 1; i <= 30; i++) {
  for(let j = i; j <= 30; j++){
    if(i === 1) memo[i][j] = j
    else memo[i][j] = memo[i-1][j-1] + memo[i][j-1]
  }
}
for(let i = 1; i<input.length; i++) {
  const [n,m] = input[i].split(' ').map(Number)
  answer.push(memo[n][m])
}

console.log(answer.join('\n'))
