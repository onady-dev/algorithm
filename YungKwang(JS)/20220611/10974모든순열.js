const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = `
3
`.trim().split('\n')

const N = Number(input.shift())

const answer = [];
function solution(arr) {
    if (arr.length === N) {
        answer.push(arr.join(' '))
        return;
    } else {
        for (let i = 1; i <= N; i++) {
            if (!arr.includes(i)) {
                arr.push(i);
                solution(arr);
                arr.pop();
            }
        }
    }
}

solution([])
console.log(answer.join('\n'))