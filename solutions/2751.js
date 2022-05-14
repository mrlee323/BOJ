let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0])
const array = []

for(let i = 1; i<=n; i++){
  array.push(input[i])
}

const result = array.sort((a,b)=>a-b)

console.log(result.join('\n'))
