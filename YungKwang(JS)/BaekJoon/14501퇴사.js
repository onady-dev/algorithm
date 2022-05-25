const fs = require("fs");
const input = (process.platform === "linux" ?
    fs.readFileSync("/dev/stdin").toString() :
    `7
3 10
5 20
1 10
1 20
2 15
4 40
2 200`).trim().split("\n");

const N = Number(input.shift());
const TP = input.map(el => el.split(" ").map(Number))

function solution(arr) {
    let max = 0
    let pay = 0
    for (let i = 0; i < N; i++) {
        DFS(i, pay)
    }

    function DFS(node, pay) {
        const [T, P] = arr[node]
        if (node + T <= N) {
            pay = pay + P
            let i = 0
            while (node + T + i < N) {
                DFS(node + T + i, pay)
                i++
            }
        }
        if (max < pay) max = pay
    }
    return max
}

console.log(solution(TP))



