const fs = require("fs");
const input = (process.platform === "linux" ?
    fs.readFileSync("/dev/stdin").toString() :
    `5
ABCD
145C
A
A910
Z321`).trim().split("\n");

const N = input.shift()
const arrays = input.sort((a, b) => a.length - b.length)

const regex = /[^0-9]/g;
arrays.map(v => {
    console.log("@@" , v.replace(regex, ""))
})


