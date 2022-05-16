const fs = require("fs");
const input = (process.platform === "linux" ?
    fs.readFileSync("/dev/stdin").toString() :
    `123456789`).trim().split("\n");

const N = Number(input.shift())

function pow(num, a) {
    return num ** a
}

let result = N - 1;   // 최소값
let start = 1
while (result > start) {
    start++
    let exponent = 2
    let min = Math.abs(N - start)
    while (N >= pow(start, exponent - 1)) {  // 거듭제곱의 수가 N보다 커질때까지 반복(N에 제일 가까운 수를 구하기 위함)
        let space = Math.abs(N - pow(start, exponent))
        if (min > space) min = space;
        exponent++
    }
    if (result > min + start) {
        result = min + start
    }
}

console.log(result)
