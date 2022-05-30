const fs = require("fs");
const input = (process.platform === "linux" ?
    fs.readFileSync("/dev/stdin").toString() :
    `60000 101 891`).trim().split("\n");

let [N, Kim, Lim] = input.shift().split(" ").map(Number)

let answer = 0
while (Kim !== Lim) {
    Kim = Math.ceil(Kim / 2)
    Lim = Math.ceil(Lim / 2)
    answer++
}
console.log(answer)