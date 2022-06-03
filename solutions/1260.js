let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [n,m,v] = input.shift().split(' ').map(Number)

const array = Array.from(Array(n+1), ()=>[])
const visited = Array(2).fill(0).map(x=> Array(n+1).fill(false))
const result = [[],[]]

for(let i = 0; i< m; i++) {
  const [x, y] = input[i].split(' ').map(Number)
  array[x].push(y)
  array[y].push(x)
}

array.map(x=> x.sort((a,b)=> a-b))

const dfs = (n) => {
  visited[0][n] = true
  result[0].push(n)
  array[n].map(x=>{
    if(!visited[0][x]){
      visited[0][x] = true
      dfs(x)
    }
  })
}

dfs(v)

const bfs = (n) => {
  let queue = []
  queue.push(n)
  
  visited[1][n] = true
  result[1].push(n)
 
  while(queue.length) {
    let n = queue.shift()
    array[n].map(x=>{
      if(!visited[1][x]){
        visited[1][x] = true
        result[1].push(x)
        queue.push(x)
      }
    })
  }
}

bfs(v)

result.map(arr=>{
  console.log(arr.join(' '))
})
