let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = Number(input.shift())
const arr = Array.from(Array(n+1),()=>[])
const parent = Array(n+1).fill(0)

input.map(v=> {
  const [x, y] = v.split(' ').map(Number)
  arr[x].push(y)
  arr[y].push(x)
})

const dfs =(n =1 , v=1)=>{
  parent[n] = v
  for(let i = 0; i< arr[n].length; i++) {
    const x = arr[n][i]
    if(!parent[x]) {
      dfs(x, n)
    }
  }
}
dfs()

console.log(parent.slice(2).join('\n'))
