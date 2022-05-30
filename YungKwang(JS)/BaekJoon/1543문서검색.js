const fs = require("fs");
const input = (process.platform === "linux" ?
    fs.readFileSync("/dev/stdin").toString() :
    `ababababa
aba
`).trim().split("\n");

const [str, word] = input

let answer = 0
let index = 0
while (index < str.length) {
    if (str.slice(index, index + word.length) === word) {
        answer++
        index += word.length
        continue
    }
    index++
}

console.log(answer)

// const matches = str.match(new RegExp(word, 'g')) || [];
// console.log(matches);
// console.log(matches.length);
