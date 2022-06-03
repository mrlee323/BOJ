let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const c = Number(input.shift())
const arr = []
const answer = []

for(let i =0; i<c; i++){
  let n = Number(input[0].split(' ')[2])
  arr.push(input.splice(0,n+1))
}

arr.map(t=>{
  const [m, n, k] = t.shift().split(' ').map(Number)
  const graph = Array(n).fill(0).map(x=> Array(m).fill(0))
  let result = 0
  
  t.map(v=> {
    let [y, x] = v.split(' ').map(Number)
    graph[x][y] = 1
  })

  for(let i = 0; i<n; i++){
    for(let j =0; j<m; j++){
      if(dfs(i,j)) result++
    }
  }

  function dfs (x,y) { 
    if(x < 0 || x >= n || y < 0 || y >= m) return false
    if(graph[x][y] === 1) {
      graph[x][y] = 0
      dfs(x, y+1)
      dfs(x, y-1)
      dfs(x+1, y)
      dfs(x-1, y)
      return true
    }
    return false
  }
  answer.push(result)
})

answer.map(x=>
  console.log(x)
)
