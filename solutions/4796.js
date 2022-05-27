let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

input.pop()

const testCase = input.map(str=> str.split(' ').map(Number))

testCase.forEach( (num, index) => {
  const [L, P, V] = num
  const rest = V%P > L ? L : V%P 
  const result = L * Math.floor(V/P) + rest
  return console.log(`Case ${index+1}: ${result} `)
})
