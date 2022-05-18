const fs = require("fs");
const input = (process.platform === "linux" ?
    fs.readFileSync("/dev/stdin").toString() :
    `3 3
1 2
2 3
3 1
`).trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number)
const A = input.map(el => el.split(" ").map(Number))

let max = 1
for(let i=0; i<M; i++){
    let set = new Set()
    set.add(A[i][0])
    set.add(A[i][1])
    for(let k=1; k<M; k++){
        if(!set.has(A[k][0]) && !set.has(A[k][1])){
            set.add(A[k][0])
            set.add(A[k][1])
        }
    }
    console.log(set)
    let size = set.size
    if(size<N) size++
    if(set.size > max){
        max = size
    }
}

console.log(max)