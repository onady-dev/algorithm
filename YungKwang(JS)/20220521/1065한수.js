const fs = require("fs");
const input = (process.platform === "linux" ?
    fs.readFileSync("/dev/stdin").toString() :
    `500`).trim().split("\n");

const N = Number(input.shift())


function solution() {
    if (N < 100) return N
    let answer = N
    let count = 100
    while (count <= N) {
        const nums = String(count).split('').map(Number)
        let f = 0
        let b = 1
        let chk = nums[f] - nums[b]
        while (nums.length > b) {
            if (chk !== nums[f] - nums[b]) {
                answer--
                break
            }
            f++
            b++
        }
        count++
    }
    return answer
}


console.log(solution())
