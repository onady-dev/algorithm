const fs = require("fs");
const input = (process.platform === "linux" ?
    fs.readFileSync("/dev/stdin").toString() :
    `5
4 1 5 2 3
5
1 3 7 9 5`).trim().split("\n");

const [N, A, M, X] = input.map(l => l.split(" ").map(x => Number(x)));
A.sort((a, b) => a - b)
const search = (x, min, max, A) => {
    const mid = Math.floor((min + max) / 2);
    if (A[mid] === x) return 1
    if (min > max) return 0

    if (A[mid] > x) {
        max = mid - 1
    } else {
        min = mid + 1
    }
    return search(x, min, max, A);
}
const result = X.map(x => search(x, 0, N[0], A))
console.log(result.join('\n'));

// const A = new Set(input[1].split(' ').map((el) => el));
// const B = input[3].split(" ").map((el) => A.has(el) ? 1 : 0)
// console.log(B.join('\n'))