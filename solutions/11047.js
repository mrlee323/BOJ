let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n,k] = input[0].split(' ').map(Number)
let arr =[]

for (let i= 1; i <=n; i++){
  arr.push(Number(input[i]))
}

let result =0;
arr.reverse();

for(let coin of arr){
  result += parseInt(k/ coin);
  k%= coin;
}
console.log(result)
