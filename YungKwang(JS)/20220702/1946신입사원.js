const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = `
2
5
3 2
1 4
4 1
2 3
5 5
7
3 6
7 3
4 2
1 4
5 7
2 5
6 1
`.trim().split('\n')

const T = +input.shift()
const arr = []
for (var i = 0; i < T; i++) {
    let N = +input.shift()
    let list = []
    for (var j = 0; j < N; j++) {
        list.push(input.shift().split(" ").map(Number))
    }
    arr.push(list)
}

console.log(arr.map(v => v[0]))