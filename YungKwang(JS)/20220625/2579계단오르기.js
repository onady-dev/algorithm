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
<<<<<<< HEAD
const arr = input.map(Number)

const dp = new Array(N).fill(0);

dp[0] = arr[0];
dp[1] = arr[0] + arr[1];
dp[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2]);

for (let i = 3; i < N; i++) {
    console.log(arr[i] + arr[i - 1] + dp[i - 3], arr[i] + dp[i - 2])
    dp[i] = Math.max(arr[i] + arr[i - 1] + dp[i - 3], arr[i] + dp[i - 2]);
}

console.log(dp);

// let answer = 0
// DFS(0, 0, 1)
// DFS(1, 0, 1)
// function DFS(stair, score, check) {
//     check++
//     score += stairs[stair]
//     if (N - 2 === stair && check < 3) DFS(stair + 1, score, check)
//     if (N - 2 > stair) {
//         if (check < 3) DFS(stair + 1, score, check)
//         DFS(stair + 2, score, 1)
//     }
//     console.log(stair, score, check)
//     if (answer < score && N - 1 === stair) answer = score

// }

// console.log(answer)
=======
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
>>>>>>> a8fb88d62ff879a5fb00ab0dcc43f7ff9276bf83
