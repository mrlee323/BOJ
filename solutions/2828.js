let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number)
const apple = Number(input.shift())
const array = input.map(Number)

let start = 1
let end = m
let count = 0

for(let i = 0; i<apple; i++){
  if(start <= array[i] && end >= array[i]) continue
  if(array[i] > end){
    count += array[i] - end
    start += array[i] - end
    end = array[i]
  } else{
    count += start - array[i]
    end -= start - array[i]
    start = array[i]
  }
}

console.log(count)
