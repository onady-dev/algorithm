const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = `
100 90
`.trim().split('\n')

const [X, Y] = input.shift().split(" ").map(Number)
const Z = Math.floor((Y * 100 / X))

// let count = 0
// while (true) {
//     if (Z === 100 || Z === 99) {
//         count = -1
//         break
//     }
//     count++
//     if (Math.floor((Y + count) * 100 / (X + count)) !== Z) break
// }

// console.log(count)

function binarysearch(first, last) {
    const mid = Math.floor((first + last) / 2)
    if (first >= last) return mid
    const temp = Math.floor(((Y + mid) * 100 / (X + mid)))
    if (temp > Z) return binarysearch(first, mid)
    if (temp <= Z) return binarysearch(mid + 1, last)
}

let result = 0
result = binarysearch(0, 100000000001)
if (result === 100000000001) {
    result = -1
}
console.log(result)
