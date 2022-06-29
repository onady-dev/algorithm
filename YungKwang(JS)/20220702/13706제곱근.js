const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = `
10000000000000000000000000000000000000000
`.trim().split('\n')

// const N = input.shift()
const N = BigInt(input.shift())

console.log(N)
function BS(min, max) {
    let mid = min + (max - min) / 2
    if (mid * mid === N) return mid
    if (mid * mid > N) return BS(min, --mid)
    if (mid * mid < N) return BS(mid, max)
}

console.log(BS(0, N / 2))