let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0])
let data = input[1].split(' ').map(x=> Number(x))
let max = Math.max(...data)

let sum = 0
for(let i = 0; i<n; i++){
  sum += (data[i]/max) * 100
}
let avg = sum / n

console.log(avg)
