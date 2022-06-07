const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = `
5
3 1 4 3 2
`.trim().split('\n')

const N = Number(input.shift())
const P = input.shift().split(" ").map(Number)

let min = 0
let answer = P.sort((a, b) => a - b)
    .map(v => min += v)
    .reduce((a, b) => a + b)

console.log(answer)