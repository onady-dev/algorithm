const fs = require("fs");
const input = (process.platform === "linux" ? 
fs.readFileSync("/dev/stdin").toString() : 
``).trim().split("\n").map(Number);

const N = input.shift();
const rope = input.sort((a,b)=>a-b);

let max = 0
for(const [index, value] of rope.entries()){
  if((N-index)*value > max) max = (N-index)*value;
}

console.log(max)
