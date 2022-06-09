const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = `
6 8
1 2
2 5
5 1
3 4
4 6
5 4
2 4
2 3
`.trim().split('\n')

const [N, M] = input.shift().split(" ").map(Number)
const uv = input.map(v => v.split(" ").map(Number))
const edge = []
for (let i = 1; i <= N; i++) {
    edge[i] = []
}

uv.map(v => {
    edge[v[0]].push(v[1])
    edge[v[1]].push(v[0])
})
let visited = []
function DFS(node) {
    visited.push(node)
    for (let i = 0; i < edge[node].length; i++) {
        const next = edge[node][i]
        if (!visited.includes(next)) {
            DFS(next)
        }
    }
}
let count = 0
for (let i = 1; i <= N; i++) {
    if (!visited.includes(i)) {
        DFS(i)
        count++
    }
}
console.log(count)