let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input.shift())
const array = input.map((arr, index)=> {
  const person = arr.split(' ')
  return [Number(person[0]), person[1], index]
})

array.sort((a,b) => a[0] - b[0] || a[2] - b[2])

let answer = ''

for(let i = 0; i< array.length; i++){
  answer += array[i][0] + ' ' + array[i][1] + '\n'
}

console.log(answer)
