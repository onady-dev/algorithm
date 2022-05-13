const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
  input.push(Number(line))
}).on('close', function () {
  // solution(input);
  console.log(solution(input));
  process.exit();
});



function solution(input) {
  const N = input.shift();
  const s = input.sort((a, b) => { return a - b })[0];
  return N * s
}




module.exports = {
  solution: solution
}