const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = `
5
1
5
3
1
2
`.trim().split('\n')

input.shift()
const rank = input.map(Number).sort((a, b) => a - b)
let count = 0

rank.forEach((v, i) => {
    count += Math.abs(i + 1 - v)
});

console.log(count)
