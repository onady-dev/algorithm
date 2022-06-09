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
const arrays = input.sort((a, b) => {
    if (a.length != b.length) return a.length - b.length;
    if (num(a) === num(b)) return a.localeCompare(b)
    return num(a) - num(b)
})

function num(str) {
    const regex = /[^0-9]/g;
    const arr = str.replace(regex, "").split("").map(Number)
    if (arr.length === 0) return 0
    return arr.reduce((a, b) => a + b)
}

console.log(arrays.join("\n"))
