const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = `
6
10
20
15
25
10
20
`.trim().split('\n')

const N = +input.shift()
const stairs = input.map(Number)

let answer = 0
DFS(0, 0, 1)
DFS(1, 0, 1)
function DFS(stair, score, check) {
    check++
    score += stairs[stair]
    if (N - 2 === stair && check < 3) DFS(stair + 1, score, check)
    if (N - 2 > stair) {
        if (check < 3) DFS(stair + 1, score, check)
        DFS(stair + 2, score, 1)
    }
    if (answer < score && N - 1 === stair) answer = score

}

console.log(answer)
