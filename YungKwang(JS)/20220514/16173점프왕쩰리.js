const fs = require("fs");
const input = (process.platform === "linux" ?
    fs.readFileSync("/dev/stdin").toString() :
    `3
2 2 1
2 2 2
1 2 -1`).trim().split("\n");

const N = Number(input.shift())
const map = input.map(v => v.split(" ").map(Number))
const visited = Array.from(Array(N), () => Array(N).fill(false))

let answer = "Hing"
DFS(0, 0)

function DFS(x, y) {
    visited[x][y] = true
    const jump = map[x][y]
    if (jump === -1) {
        answer = "HaruHaru"
        return
    }
    if (x + jump < N && !visited[x + jump][y]) DFS(x + jump, y)
    if (y + jump < N && !visited[x][y + jump]) DFS(x, y + jump)
}
console.log(answer)
