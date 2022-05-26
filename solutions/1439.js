let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let n =input[0]

let array = n.replace(/10/g, '1/0').replace(/01/g, '0/1').split('/')

let count = [0 , 0]

for(let i = 0; i< array.length; i++){
  if(Number(array[i]) === 0) count[0]++
  else count[1]++
}

console.log(Math.min(count[0], count[1]))
