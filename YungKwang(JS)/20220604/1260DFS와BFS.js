const fs = require("fs");
const input = (process.platform === "linux" ?
    fs.readFileSync("/dev/stdin").toString() :
    `5 5 3
5 4
5 2
1 2
3 4
3 1`).trim().split("\n");

const [N, M, V] = input.shift().split(" ").map(Number)
const data = input.map(v => v.split(" ").map(Number))

let graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
for (let i of data) {
    let [x, y] = i
    graph[x][y] = 1;
    graph[y][x] = 1;
}

let visitedDFS = []
let visitedBFS = []

function DFS(node) {
    visitedDFS.push(node)
    for (let i = 1; i <= N; i++) {
        if (graph[node][i] === 1 && !visitedDFS.includes(i)) {
            DFS(i)
        }
    }
}

function BFS(node) {
    let queue = []
    visitedBFS.push(node)
    queue.push(node)
    while (queue.length !== 0) {
        const dequeue = queue.shift();
        for (let i = 1; i <= N; i++) {
            if (graph[dequeue][i] === 1 && !visitedBFS.includes(i)) {
                queue.push(i)
                visitedBFS.push(i)
            }
        }
    }
}

DFS(V)
BFS(V)
console.log(visitedDFS.join(" "))
console.log(visitedBFS.join(" "))