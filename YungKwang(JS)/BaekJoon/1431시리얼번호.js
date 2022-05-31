const fs = require("fs");
const input = (process.platform === "linux" ?
    fs.readFileSync("/dev/stdin").toString() :
    `5
ABCDE
BCDEF
ABCDA
BAAAA
ACAAA`).trim().split("\n");

const N = input.shift()
const arrays = input.sort()
arrays.sort((a, b) => a.length - b.length)
arrays.sort((a, b) => num(a) - num(b))

function num(str) {
    const regex = /[^0-9]/g;
    const arr = str.replace(regex, "").split("").map(Number)
    if (arr.length === 0) return 0
    return arr.reduce((a, b) => a + b)
}

console.log(arrays)
