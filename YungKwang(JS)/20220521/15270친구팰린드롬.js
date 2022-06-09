const fs = require("fs");
const input = (process.platform === "linux" ?
    fs.readFileSync("/dev/stdin").toString() :
    `6 6
1 2
2 4
3 4
4 5
5 3
6 3
`).trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number)
const A = input.map(el => el.split(" ").map(Number))

let result = [];
let max = 1
const solution = (arr) => {
    arr.forEach((value, index, arr) => {
        if (!result.includes(value[0]) && !result.includes(value[1])) {
            result.push(value[0])
            result.push(value[1])
            solution(arr.slice(index + 1))
        }
    })
    let num = result.length
    if (N > num) num++
    if (max < num) max = num
    result.pop();
    result.pop();
}
solution(A)
console.log(max)