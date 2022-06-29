const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = `
6
20 1 15 8 4 10
`.trim().split('\n')

const N = +input.shift()
const A = input.shift().split(" ").map(Number)

let arr = []

for (var i = 0; i < N; i++) {
    if (i % 2 == 0) {
        A.sort((a, b) => a - b)
    } else {
        A.sort((a, b) => b - a)
    }
    arr.push(A.shift())
}

let answer = 0
console.log(arr)
arr.forEach((v, i) => {

    console.log(arr[i + 1], v, Math.abs(arr[i + 1] - v))
    if (i < arr.length - 1) {
        answer += Math.abs(arr[i + 1] - v)
    }
});
console.log(answer)