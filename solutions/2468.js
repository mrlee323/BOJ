const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input.shift())
input = input.map(arr=> arr.split(' ').map(Number))

const max = Math.max(...input.flat())
const result = []

for(let k=0; k <= max; k++){
  const visited = Array(n+1).fill(0).map((_)=>Array(n+1).fill(0))
  let count = 0
  for(let i = 0; i<n; i++) {
    for(let j = 0; j<n; j++){
      if(input[i][j] > k && !visited[i][j]) {
        dfs(i,j, k, visited)
        count++
      }
    }
  }
  result.push(count)
}

function dfs (x, y, k, visited) {
  if(x < 0 || x >=n || y < 0 || y >= n || visited[x][y] || input[x][y] <= k) return
  visited[x][y] = 1
  dfs(x, y+1, k, visited)
  dfs(x+1, y, k, visited)
  dfs(x, y-1, k, visited)
  dfs(x-1, y, k, visited)
}

console.log(Math.max(...result))
