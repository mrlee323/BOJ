let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let n = Number(input.shift())
let dasom = Number(input.shift())
let array = input.map(Number).sort((a,b)=> b-a)
let count = 0

while(dasom <= array[0]){
  array[0]--
  dasom++
  count++
  if(array[0] < array[1]) {
    array.sort((a,b) => b-a)
  }
}

console.log(count)
