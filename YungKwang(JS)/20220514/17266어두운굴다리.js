const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = `
5
2
2 4
`.trim().split('\n')

const N = input.shift()
const M = input.shift()
const X = input.shift().split(" ").map(Number)

let space = []
X.map((v, i, arr) => {
  if (i === 0) space.push(v)
  if (i === M - 1) space.push(N - v)
  if (i > 0) space.push(Math.ceil((v - arr[i - 1]) / 2))
})
space.sort((a, b) => b - a)
console.log(space[0])

// const length = Number(input.shift());
// const count = Number(input.shift());
// const position = input.shift().split(' ').map(Number);

// let interval = [];
// for (const [index, value] of position.entries()) {
//   if(count === 1){
//     interval.push(value);
//     interval.push(length - value);
//     break
//   }
//   if (index === 0) {
//     interval.push(value);
//     continue;
//   }
//   if (index === count - 1) {
//     interval.push(Math.ceil((value - position[index - 1]) / 2));
//     interval.push(length - value);
//     break;
//   }
//   interval.push(Math.ceil((value - position[index - 1]) / 2));
// }

// let Height = interval.sort((a, b) => {
//   return b - a;
// })[0];

// console.log(Height)