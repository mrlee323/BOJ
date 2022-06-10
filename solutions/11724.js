let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, m] =input.shift().split(' ').map(Number)
const arr = Array.from(Array(n+1), ()=>[])
const visited = Array(n+1).fill(0)
let count = 0

input.map(v=>{
  const [x, y] = v.split(' ').map(Number)
  arr[x].push(y)
  arr[y].push(x)
})

const dfs =(n) => {
  if(visited[n]) return false
  visited[n] = 1
  arr[n].map(v => {
    if(!visited[v]) dfs(v)
  })
  return true
}

for(let i = 1; i<= n; i++) {
  if(dfs(i)) count++
}

console.log(count)
