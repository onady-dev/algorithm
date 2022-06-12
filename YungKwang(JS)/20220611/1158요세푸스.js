const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = `
7 3
`.trim().split('\n')

const [N, K] = input.shift().split(" ").map(Number)

const arr = Array.from({ length: N }, (v, i) => i + 1)

let answer = []
let i = 1

while (arr.length > 0) {
    const a = arr.shift()
    if ((i) % K === 0) {
        answer.push(a)
    } else {
        arr.push(a)
    }
    i++
}
console.log('<' + answer.join(', ') + '>');

// while (arr.length > 0) {
//     i += K - 1
//     i %= arr.length;
//     answer.push(arr.splice(i, 1)[0])
// }
