let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input.shift())
let array = input[0].split(' ').map(Number).sort((a,b)=> b-a)

for(let i = 0; i < n; i++){
  array[i] = array[i] - (n - (i + 1))
}

const rest = Math.max(...array)

console.log(n + rest + 1)
