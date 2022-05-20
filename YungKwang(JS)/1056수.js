const fs = require("fs");
const input = (process.platform === "linux" ?
    fs.readFileSync("/dev/stdin").toString() :
    `1234567`).trim().split("\n");

const N = Number(input.shift())

function BFS(depth, arr) {
    let visited = []
    for (let a of arr) {
        if (a === N) return depth
        if (a > N) {
            visited.push(a - 1)
            continue
        }

        visited.push(a + 1)

        if (a !== 1) {
            let ex = 1
            while (N >= a ** ex + 1) {
                ex++
                visited.push(a ** ex)
            }
        }
    }
    return BFS(depth + 1, visited)
}

console.log(BFS(0, [1]))