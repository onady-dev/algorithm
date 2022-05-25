const fs = require("fs");
const input = (process.platform === "linux" ?
    fs.readFileSync("/dev/stdin").toString() :
    `9 16
21 25
77 23
23 88
95 43
96 19
59 36
80 13
51 24
15 8
25 61
21 22
3 9
68 68
67 100
83 98
96 57
`).trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let package = []
let item = []
input.map(el => {
    package.push(parseInt(el.split(" ")[0]))
    item.push(parseInt(el.split(" ")[1]))
})
const minPackage = Math.min(...package);
const minItem = Math.min(...item);

const result = parseInt(N / 6)
const rest = N % 6

const cost = Math.min(result * minPackage + rest * minItem, N * minItem, (result + 1) * minPackage)
console.log(cost)
