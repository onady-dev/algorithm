const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = `
15 28 19
`.trim().split('\n')
// 15 28 19
const [E,S,M] = input.shift().split(" ").map(Number)

let answer = 0
while(true){
    if(answer%15===E-1 && answer%28===S-1 && answer%19===M-1) break;
    answer++
}

console.log(++answer)