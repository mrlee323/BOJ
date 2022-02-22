let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input[0]
let groups = data.split('-')

function processGroup(value) {
  return value.split('+').map(Number).reduce((a,b)=>a+b)
}

let result = processGroup(groups[0])
for(let i=1; i< groups.length; i++) {
  result -= processGroup(groups[i]);
}
console.log(result)
