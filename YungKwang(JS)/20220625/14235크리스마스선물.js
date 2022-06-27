const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = `
<<<<<<< HEAD
8
2 1 1
0
0
3 2 1 1
0
0
3 3 2 2
0
=======
5
0
2 3 2
0
0
0
>>>>>>> a8fb88d62ff879a5fb00ab0dcc43f7ff9276bf83
`.trim().split('\n')

const N = +input.shift()
const A = input.map(v => v == 0 ? Number(v) : v.split(" ").map(Number))
<<<<<<< HEAD
=======

>>>>>>> a8fb88d62ff879a5fb00ab0dcc43f7ff9276bf83
let gift = []
A.forEach((v) => {
    if (v === 0) {
        gift.length > 0 ? console.log(gift.shift()) : console.log(-1)
    } else {
        gift.push(...v.splice(1))
        gift.sort((a, b) => b - a)
    }
});
<<<<<<< HEAD
console.log(gift)
=======
>>>>>>> a8fb88d62ff879a5fb00ab0dcc43f7ff9276bf83
