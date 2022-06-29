const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = `
3 5
1 2 4
2 3 4 5 6
`.trim().split('\n')

const [N, M] = input.shift().split(" ").map(Number)
const A = input.shift().split(" ").map(Number)
const B = input.shift().split(" ").map(Number)
const set = new Set([...A, ...B])
console.log(set.size - (N + M - set.size))