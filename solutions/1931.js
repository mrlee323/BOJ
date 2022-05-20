let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input.shift())
const array = input.map(arr=> arr.split(' ').map(Number))

array.sort((a,b) => a[1] - b[1] || a[0] - b[0])
  
let count = 0
let end = 0
for(let i = 0; i < n; i++) {
  if(array[i][0] < end) continue
  count ++ 
  end = array[i][1]
}

console.log(count)
