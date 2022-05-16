const fs = require("fs");
const input = (process.platform === "linux" ?
    fs.readFileSync("/dev/stdin").toString() :
    `3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton`).trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number)
const A = new Set(input.slice(0, N))
const B = input.slice(N)
let result = []
for (const b of B) {
    if (A.has(b)) result.push(b)
}
result.sort();

console.log(result.length)
console.log(result.join("\n"))

