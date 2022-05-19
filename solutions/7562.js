let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let n = Number(input[0])
let index = 1

for (let i = 0; i < n; i++) {
  let board_size = Number(input[index])
  let board = new Array(board_size)
  for (let j = 0; j < board.length; j++) {
    board[j] = new Array(board_size).fill(0)
  }

  let x = Number(input[index + 1].split(' ')[0])
  let y = Number(input[index + 1].split(' ')[1])
  let end_x = Number(input[index + 2].split(' ')[0])
  let end_y = Number(input[index + 2].split(' ')[1])

  function bfs() {
    let result = 0
    let dx = [-2, -2, -1, -1, 1, 1, 2, 2]
    let dy = [-1, 1, -2, 2, -2, 2, -1, 1]
    let queue = []
    queue.push([x, y])
    while (queue.length > 0) {
      let length = queue.length
      for (let i = 0; i < length; i++) {
        let v = queue.shift()
        if (v[0] === end_x && v[1] === end_y) {
          return result
        }
        for (let i = 0; i < 8; i++) {
          let nx = v[0] + dx[i]
          let ny = v[1] + dy[i]
          if (nx < 0 || nx >= board_size || ny < 0 || ny >= board_size || board[nx][ny] === 1) continue
          board[nx][ny] = 1;
          queue.push([nx,ny])
        }
      }
      result++
    }
  }
  console.log(bfs())
  index += 3
}
