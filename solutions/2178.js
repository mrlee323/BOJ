let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n,m] = input.shift().split(' ').map(Number)
// let visited = Array(n).fill(0).map(_=>Array(m).fill(0))
input = input.map(arr=> arr.split('').map(Number))

function bfs (x, y) {
  const queue = [[x, y]];
  while (queue.length) {
    const [x, y] = queue.shift()
    const dx = [0, 1, 0, -1]
    const dy = [1, 0, -1, 0]
    for(let i = 0; i<4; i++){
      const nx = x + dx[i]
      const ny = y + dy[i]
      if(nx < 0 || nx >= n || ny < 0|| ny >= m) continue
      if(input[nx][ny] === 1) {
        input[nx][ny] = input[x][y] + 1
         queue.push([nx, ny])
      }
    }
  }
}

bfs(0,0)

console.log(input[n-1][m-1])
