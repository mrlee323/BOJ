let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const c = Number(input.shift())

for(let i =0; i<c; i++){
  const [m, n, k] = input.shift().split(' ').map(Number)
  const arr = input.splice(0,k)
  const graph = Array(n).fill(0).map(x=> Array(m).fill(0))
  let count = 0

  arr.map(v=> {
    let [y, x] = v.split(' ').map(Number)
    graph[x][y] = 1
  })

  for(let i = 0; i<n; i++){
    for(let j =0; j<m; j++){
      if(graph[i][j] === 1){
        bfs(i,j, n, m, graph)
        count++
      }
    }
  }
  
  console.log(count)
}

function bfs (x, y, n, m, graph) {
  const dx = [-1, 1, 0, 0]
  const dy = [0, 0, -1, 1]
   
  const queue = []
  queue.push([x,y])
  graph[x][y] = 0
  
  while(queue.length){
    const [x, y] = queue.shift()
    for(let i = 0; i<4; i++) {
      const nx = x + dx[i]
      const ny = y + dy[i]
      if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue
      if(graph[nx][ny] === 0) continue
      if(graph[nx][ny] === 1) {
        graph[nx][ny] = 0
        queue.push([nx, ny])
      }
    }
  }
}
