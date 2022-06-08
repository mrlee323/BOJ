 let fs = require('fs')
 let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input.shift())
const arr = input[0].split(' ').map(Number)
let count = 0

for(let i = 0; i< n; i++) {
  if(isPrime(arr[i])) count++
}

function isPrime (n) {
  if(n === 1) return false
  if(n === 2) return true
  for(let i = 2; i <= Math.sqrt(n); i++) {
    if(n % i === 0 && i !== n) return false
  }
  return true
}

console.log(count)
