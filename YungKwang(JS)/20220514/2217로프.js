const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = `
2
10
15
`.trim().split('\n')

const N = Number(input.shift())
const rope = input.map(Number).sort((a, b) => a - b)

let list = []
rope.map((v, i) => {
  list.push(v * (N - i))
})

console.log(Math.max(...list))