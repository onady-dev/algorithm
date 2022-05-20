const fs = require("fs");
const input = (process.platform === "linux" ? 
fs.readFileSync("/dev/stdin").toString() : 
``).trim().split("\n");

const length = Number(input.shift());
const count = Number(input.shift());
const position = input.shift().split(' ').map(Number);

let interval = [];
for (const [index, value] of position.entries()) {
  if(count === 1){
    interval.push(value);
    interval.push(length - value);
    break
  }
  if (index === 0) {
    interval.push(value);
    continue;
  }
  if (index === count - 1) {
    interval.push(Math.ceil((value - position[index - 1]) / 2));
    interval.push(length - value);
    break;
  }
  interval.push(Math.ceil((value - position[index - 1]) / 2));
}

let Height = interval.sort((a, b) => {
  return b - a;
})[0];

console.log(Height)