et fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let string = input[0].replace(/\X{4}/g, 'AAAA').replace(/\X{2}/g, 'BB')

if(string.includes('X')) {
  console.log(-1)
} else{
  console.log(string)
}
