let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input.shift())
const [x, y] = input.shift().split(' ').map(Number)
const m = Number(input.shift())

const array = Array.from(Array(n+1), ()=>[])
const graph = Array(n+1).fill(0)

for(let i = 0; i< m; i++) {
  const [x, y] = input[i].split(' ').map(Number)
  array[x].push(y)
  array[y].push(x)
}

graph[x] = 1

const dfs = (n) => {
  array[n].map(x=>{
    if(!graph[x]){
      graph[x] = graph[n] +1
      dfs(x)
    }
  })
}

dfs(x)

console.log(graph[y]-1)
