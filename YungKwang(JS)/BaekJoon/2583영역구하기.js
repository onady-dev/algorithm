const fs = require("fs");
const input = (process.platform === "linux" ?
    fs.readFileSync("/dev/stdin").toString() :
    `5 7 3
0 2 4 4
1 1 2 5
4 0 6 2`).trim().split("\n");

const [M, N, K] = input.shift().split(" ").map(Number)
const square = input.map(el => el.split(" ").map(Number))
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
const arr = Array.from(Array(7), () => new Array(5).fill(0))
square.map(el => {
    const x1 = el[0]
    const y1 = el[1]
    const x2 = el[2] - 1
    const y2 = el[3] - 1
    let i = x1
    while (i <= x2) {
        let j = y1
        while (j <= y2) {
            arr[i][j] = 1
            j++
        }
        i++
    }
})
console.log(arr)