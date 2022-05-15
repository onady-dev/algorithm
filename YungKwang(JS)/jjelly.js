const fs = require("fs");
const input = (process.platform === "linux" ? 
fs.readFileSync("/dev/stdin").toString() : 
`3
3 1 10
1 5 1
3 2 -1`).trim().split("\n");

const size = Number(input.shift());
const map = input.slice();
let map2 = []
for(const m of map){
    map2.push(m.split(' ').map(Number));
}

const start = map2[0][0]
let num = start
console.log(check(num, 0))

function check(y, x){
    while(y>=size){
        y--
        x++
    }
    if(x>=size) {
        return 'Hing'
    }
    if(map2[y][x] === -1) {
        return 'HaruHaru'
    }
    return check(y+map2[y][x], x)
}
