const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = `
8
icecream
peanuts
peanuts
chocolate
candy
chocolate
icecream
apple
`.trim().split('\n')

const N = input.shift()
const books = input.sort()
const title = Array.from(new Set(books))
const count = []

for (let t of title) {
    count.push({ title: t, count: 0 })
}
for (let b of books) {

    for (let c of count) {
        if (b === c.title) {
            c.count += 1
        }
    }
}
const answer = count.sort((a, b) => b.count - a.count)
console.log(answer[0].title)

// let obj = {}
// books.forEach(el => {
//     if (!obj[el]) obj[el] = 1;
//     else obj[el]++;
// });
// let max = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
// console.log(max[0]);