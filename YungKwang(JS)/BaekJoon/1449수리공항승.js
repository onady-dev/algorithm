const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = `
3 1
3 2 1
`.trim().split('\n')

const [N, L] = input.shift().split(" ").map(Number)
const hole = input.shift().split(" ").map(Number).sort((a, b) => a - b)

let tape = 0
let index = 0

taping(index, hole[index] + L - 1)
function taping(index, length) {
    if (index === N) return
    if (hole[index + 1] <= length) {
        taping(index + 1, length)
    } else {
        tape++
        taping(index + 1, hole[index + 1] + L - 1)
    }
}

// let start = 0
// while (index < N) {
//     if (start < hole[index]) {
//         start = hole[index] + L - 1
//         tape++
//     }
//     index++
// }

console.log(tape)