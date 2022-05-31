const fs = require("fs");
const input = (process.platform === "linux" ?
    fs.readFileSync("/dev/stdin").toString() :
    `5
ABCDE
BCDEF
C12DA
B12AA
ACAAA`).trim().split("\n");

const N = input.shift()
const arrays = input.sort()

console.log(arrays, 1)

arrays.sort((a, b) => {
    return a.length - b.length
})

console.log(arrays, 2)

// arrays.sort((a, b) => {
//     if (num(a) !== -1 && num(b) !== -1) return num(a) - num(b)
// })
arrays.sort((a, b) => num(a) - num(b))

function num(str) {
    const regex = /[^0-9]/g;
    const arr = str.replace(regex, "").split("").map(Number)
    if (arr.length === 0) return 0
    return arr.reduce((a, b) => a + b)
}

console.log(arrays, 3)

// const dap = ['FIPJOTEA5',
//     'PYF1J14TF',
//     '34H2BJS6N',
//     'PIM12MD7RCOLWW09']
const dap = [
    'A',
    'ABCD',
    'Z321',
    '145C',
    'A910'
]
console.log(dap)