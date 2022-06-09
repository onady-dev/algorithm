const fs = require("fs");
const input = (process.platform === "linux" ?
    fs.readFileSync("/dev/stdin").toString() :
    `5 7 3
0 2 4 4
1 1 2 5
4 0 6 2`).trim().split("\n");

const [M, N, K] = input.shift().split(" ").map(Number)
const square = input.map(el => el.split(" ").map(Number))
const tree = Array.from(Array(N), () => new Array(M).fill(0))
const visited = Array.from(Array(N), () => new Array(M).fill(0))
square.map(el => {
    const [x1, y1, x2, y2] = el
    let i = x1
    while (i <= x2 - 1) {
        let j = y1
        while (j <= y2 - 1) {
            tree[i][j] = 1
            j++
        }
        i++
    }
})
/* 
[
    [0, 0, 1, 1, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 1, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]
]
*/

let count
const area = [];
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

function DFS(x, y) {
    visited[x][y] = 1;
    count++
    for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];
        if (nx >= 0 && ny >= 0 && nx < N && ny < M && !visited[nx][ny] && tree[nx][ny] !== 1) {
            DFS(nx, ny)
        }
    }
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (tree[i][j] === 0 && !visited[i][j]) {
            count = 0;
            DFS(i, j);
            area.push(count);
        }
    }
}

const sorted_area = area.sort((a, b) => a - b);
const area_cnt = area.length;

console.log(area_cnt);
console.log(sorted_area.join(" "));