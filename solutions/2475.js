let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const arr = input[0].split(' ').map(Number)

const sum = arr.reduce((acc,cur) => acc += cur**2 ,0)

console.log(sum % 10)
