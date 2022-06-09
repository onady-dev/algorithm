const fs = require("fs");
const input = (process.platform === "linux" ?
    fs.readFileSync("/dev/stdin").toString() :
    `<   space   >space space space<    spa   c e>`).trim().split("\n");

const S = input.shift().split("")

const stack = []
let answer = ""
solution(S, 0)
function solution(arr, index) {
    if (arr.length <= index) {
        while (stack.length > 0) {
            answer += stack.pop()
        }
        return
    }
    if (arr[index] === "<") {
        while (stack.length > 0) {
            answer += stack.pop()
        }
        while (arr[index] !== ">") {
            answer += arr[index]
            index++
        }
        answer += arr[index]
        return solution(arr, index + 1)
    }
    if (arr[index] === " ") {
        while (stack.length > 0) {
            answer += stack.pop()
        }
        answer += " ";
    } else {
        stack.push(arr[index])
    }
    return solution(arr, index + 1)
}

console.log(answer)


// const reg = /(<.+?>|\s)/g;
// const temp = input.shift().split(reg);

// const result = temp.map((word) => {
//     return reg.test(word) ? word : word.split('').reverse().join('');
// });

// console.log(result.join(''));