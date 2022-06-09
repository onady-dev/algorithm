const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = `
7 3
`.trim().split('\n')

const [N, K] = input.shift().split(" ").map(Number)

const arr = Array.from({ length: N }, (v, i) => i + 1)

let queue = []
let i = 0

// while (arr.length > 0) {
//     const a = arr.shift()
//     if ((i + 1) % K === 0) {
//         queue.push(a)
//     } else {
//         arr.push(a)
//     }
//     i++
// }

while (arr.length > 0) {
    i += K - 1
    i %= arr.length;
    queue.push(arr.splice(i, 1)[0])
}

console.log('<' + queue.join(', ') + '>');