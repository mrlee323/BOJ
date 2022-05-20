let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const array = input.map(arr=> Number(arr)).sort((a,b) => a-b)
const total = array.reduce((a,b) => a + b)

let result = []

for(let i = 0; i< array.length; i++) {
  for(let j = i+1; j<array.length; j++) {
    if( total - (array[i] + array[j]) === 100) {
      result = array.filter((num, index) => index !== i && index !== j)
      break
    }
  }
}

result.map(num => console.log(num))
