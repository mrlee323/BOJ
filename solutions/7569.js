const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [m, n, h] = input.shift().split(' ').map(Number)

const graph = []

for(let i = 0; i< n * h; i += n){
  graph.push(input.slice(i, i+n).map(arr=> arr.split(' ')))
}

console.log(bfs())

function bfs () {
  let queue = []
  const dx = [0, -1, 0, 1, 0, 0]
  const dy = [-1, 0, 1, 0, 0, 0]
  const dz = [0, 0, 0, 0, -1, 1]
  let zero = 0
  let count = 0

  for(let z = 0; z < h; z++){
    for(let x = 0; x < n; x++){
      for(let y = 0; y < m; y++){
        if(graph[z][x][y] === "1") queue.push([z,x,y])
        if(graph[z][x][y] === "0") zero++
      }
    }
  }
  while(queue.length) {
    const temp = []
    for([z, x, y] of queue){
      for(let j = 0; j< 6; j++) {
        const nz = +z + dz[j]
        const nx = +x + dx[j]
        const ny = +y + dy[j]
        if(nx >= 0 && nx < n && ny >= 0 && ny < m && nz >= 0 && nz < h && graph[nz][nx][ny] === "0") {
          graph[nz][nx][ny] = "1"
          temp.push([nz,nx,ny])
          zero--
        }
      }
    }
    queue = temp 
    count++
  }
  return zero > 0 ? -1 : count-1
}
