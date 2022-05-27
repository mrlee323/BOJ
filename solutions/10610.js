let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let n = input[0].split('').map(Number).sort((a,b)=> b-a)
let sum = n.reduce((a,c) => a + c)
let result = n.join('')

if(sum % 3 === 0 && n.includes(0)){
  console.log(result)
} else {
  console.log(-1)
}
