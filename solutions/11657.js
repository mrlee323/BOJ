let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number)

const edges = input.map(x=> x.split(' ').map(Number))

const dist = Array(n+1).fill(Infinity)

const negativeCycle = bf(1)

if(negativeCycle) console.log(-1)
else{
  for(let i =2; i < dist.length; i++) {
    if(dist[i] === Infinity) console.log(-1)
    else console.log(dist[i])
  }
}

function bf (start) {
  dist[start] = 0
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++){
      const [cur, next, cost] = edges[j]
      if(dist[cur] !== Infinity && dist[next] > dist[cur] + cost) {
        dist[next] = dist[cur] + cost
        if(i === n - 1) return true
      }
    }
  }
  return false
}
