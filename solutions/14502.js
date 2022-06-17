const fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n');

const [n, m] = input.shift().split(' ').map(Number)
const graph = input.map(x=> x.split(' ').map(Number))
const zero = []
let answer = 0

for(let i = 0; i<n; i++) {
  for(let j = 0; j<m; j++) {
    if(!graph[i][j]) zero.push([i,j])
  }
}

for(let i = 0; i< zero.length-2; i++){
  for(let j = i+1; j<zero.length-1; j++) {
    for(let k = j+1; k<zero.length; k++) {
      const arr = graph.map(x=> [...x])  
      
      arr[zero[i][0]][zero[i][1]] = 1
      arr[zero[j][0]][zero[j][1]] = 1
      arr[zero[k][0]][zero[k][1]] = 1   
      
      answer = Math.max(bfs(arr), answer)
    }
  }
}

function bfs (graph) {
  const queue = []
  const dx = [0, -1, 0, 1]
  const dy = [-1, 0, 1, 0]
  let zero = 0
  
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      if(graph[i][j] === 2) queue.push([i,j])
      if(graph[i][j] === 0) zero++
    }
  }

  while(queue.length) {
    const [x, y] = queue.shift()
    for(let i = 0; i<4; i++) {
      const nx = x + dx[i]
      const ny = y + dy[i]
      if(nx >=0 && nx < n && ny >= 0 && ny < m && graph[nx][ny] === 0){
        graph[nx][ny] = 2
        queue.push([nx,ny])
        zero--
      }
    }
  }
  return zero
}

console.log(answer)
