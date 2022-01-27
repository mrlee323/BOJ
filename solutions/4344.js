let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0])

for (let i = 1; i<= n; i++) {
  let arr = input[i].split(' ').map(x=> Number(x))
  let avg = (arr.reduce((a,b) => a+b)-arr[0])/arr[0]
  let sum = 0
  for(let i = 1; i<arr.length; i++){
    if(arr[i]>avg){
     sum++
    }
  }
  console.log(`${(sum/arr[0]*100).toFixed(3)}%`)
}
