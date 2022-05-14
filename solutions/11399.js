let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0])
const array = input[1].split(' ').map(number=> Number(number))

const sortedArray = array.sort((a,b)=> a-b)
let result = 0;

for(let i=0; i<n; i++){
  for(let j=0; j<=i; j++){
    result += sortedArray[j]
  }
}

console.log(result)
