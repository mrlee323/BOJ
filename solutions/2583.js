const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [m, n, k] = input.shift().split(' ').map(Number)
input = input.map(arr=> arr.split(' ').map(Number))
const graph = Array(n).fill(0).map((_)=>Array(m).fill(0))
const result = []

for(let i = 0; i < k; i++) {
  const [x1, y1, x2, y2] = input[i]
  for(let x = x1; x < x2; x++){
    for(let y = y1; y < y2; y++){
      graph[x][y] = 1
    }
  }
}

for(let i = 0; i<n; i++) {
  for(let j = 0; j<m; j++){
    if(!graph[i][j]) {
      result.push(bfs(i,j))
    }
  }
}

function bfs (x,y) {
  const queue = [[x,y]]
  let count = 0
  while(queue.length) {
    const [x, y] = queue.shift()
    if(x < 0 || x >=n || y < 0 || y >= m || graph[x][y]) continue
    graph[x][y] = 1
    count++
    queue.push([x-1, y])
    queue.push([x, y-1])
    queue.push([x+1, y])
    queue.push([x, y+1])
  }
  return count
}

console.log(result.length)
console.log(result.sort((a,b)=> a-b).join(' '))
