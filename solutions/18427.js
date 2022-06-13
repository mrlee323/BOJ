const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, m, h] = input.shift().split(' ').map(Number)
const arr = input.map(x=> x.split(' ').map(Number))
const d = Array(h+1).fill(0)
d[0] = 1

for(let i = 0; i<n; i++) {
  let data = []
  for(j = 0; j <= h; j++) {
    for(let k = 0; k < arr[i].length; k++) {
      if(d[j] !=0 && j + arr[i][k] <= h){
        data.push([j+arr[i][k], d[j]])
      }
    }
  }

  for([height, value] of data) {
    d[height] = (d[height] + value) % 10007
  }
}
console.log(d[h])
