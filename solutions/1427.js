let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const array = input[0].split('').sort((a,b)=>b-a).join('')

console.log(array)
