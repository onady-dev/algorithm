const fs = require("fs");
const input = (process.platform === "linux" ?
    fs.readFileSync("/dev/stdin").toString() :
    `5 11
baekjoononlinejudge
startlink
codeplus
sundaycoding
codingsh
baekjoon
codeplus
codeminus
startlink
starlink
sundaycoding
codingsh
codinghs
sondaycoding
startrink
icerink
`).trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const S = new Set(input.slice(0,N))
const arr = input.slice(N)

let count = 0
arr.map(v=>{
    if(S.has(v)) count++
})
console.log(count)