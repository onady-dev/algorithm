const fs = require("fs");
const input = (process.platform === "linux" ?
    fs.readFileSync("/dev/stdin").toString() :
    ``).trim().split("\n");

const N = Number(input.shift());

const members = input.map(el => {
    return {
        age: el.split(" ")[0],
        name: el.split(" ")[1]
    }
})
const sort = members.sort((a, b) => {
    return a.age - b.age
})
sort.map(el => {
    console.log(el.age + " " + el.name)
})

// const members = input.sort((a, b) => {
//     return parseInt(a) - parseInt(b)
// })
// console.log(members.join('\n'))