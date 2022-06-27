const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = `
8
2 1 1
0
0
3 2 1 1
0
0
3 3 2 2
0
`.trim().split('\n')

const N = +input.shift()
const A = input.map(v => v == 0 ? Number(v) : v.split(" ").map(Number))
let gift = []
A.forEach((v) => {
    if (v === 0) {
        gift.length > 0 ? console.log(gift.shift()) : console.log(-1)
    } else {
        gift.push(...v.splice(1))
        gift.sort((a, b) => b - a)
    }
});
console.log(gift)