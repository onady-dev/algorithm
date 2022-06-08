const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = `
5 4
1 2
2 5
5 1
3 4
`.trim().split('\n')

const [N, M] = input.shift().split(" ").map(Number)
const uv = input.map(v => v.split(" ").map(Number))
let graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

uv.map((v, i) => {
    graph[v[0]][v[1]] = 1
    graph[v[1]][v[0]] = 1
})
console.log(graph)