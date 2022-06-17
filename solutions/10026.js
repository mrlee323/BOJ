const fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n');

const n = Number(input.shift())
const graph = input.map(x=> x.split(''))
let visited = Array(n).fill(0).map(x=> Array(n).fill(0))
const answer = [0,0]

for(let i = 0; i<n; i++){
  for(let j = 0; j<n; j++) {
    if(!visited[i][j]) {
      dfs(i,j,graph[i][j])
      answer[0]++
    }
  }
}

visited = Array(n).fill(0).map(x=> Array(n).fill(0))

for(let i = 0; i<n; i++){
  for(let j = 0; j<n; j++) {
    if(!visited[i][j]) {
      dfs(i,j,graph[i][j])
      answer[1]++
    }
  }
}

function dfs (x,y,v) {
  if(x < 0 || x >= n || y < 0 || y >= n) return false
  if(graph[x][y] !== v || visited[x][y]) return false
    if(graph[x][y] === 'G') graph[x][y] = 'R'
    visited[x][y] = 1
    dfs(x-1, y, v)
    dfs(x+1, y, v)
    dfs(x, y-1, v)
    dfs(x, y+1, v)
  return true
}

console.log(answer.join(' '))
