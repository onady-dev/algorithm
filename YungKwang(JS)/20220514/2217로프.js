const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = `
3
15
10
100
`.trim().split('\n')

/*
  20220616
*/
const N = input.shift()
const ropes = input.map(Number)

let max = 0
ropes.sort((a, b) => a - b)
ropes.map((v, i) => {
  if ((N - i) * v > max) max = (N - i) * v
})

console.log(max)

/* 
const N = Number(input.shift())
const rope = input.map(Number).sort((a, b) => a - b)

let list = []
rope.map((v, i) => {
  list.push(v * (N - i))
})

console.log(Math.max(...list))
*/