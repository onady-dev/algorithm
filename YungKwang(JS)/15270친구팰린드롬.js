const fs = require("fs");
const input = (process.platform === "linux" ?
    fs.readFileSync("/dev/stdin").toString() :
    `4 4
1 2
2 3
3 1
4 1`).trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number)
const A = input.map(el => el.split(" ").map(Number))

let result = new Set()

for (const a of A) {
    if (!result.has(a[0]) && !result.has(a[1])) {
        result.add(a[0])
        result.add(a[1])
    }
}

console.log(result, A)
console.log(result.size < N ? result.size + 1 : result.size)