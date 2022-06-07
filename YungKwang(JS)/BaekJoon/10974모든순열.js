const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = `
4
`.trim().split('\n')

const N = input.shift()

const arr = Array.from({ length: N }, (v, i) => i + 1)

function* permutations(elements) {
    if (elements.length === 1) {
        yield elements;
    } else {
        const [first, ...rest] = elements;

        for (const a of permutations(rest)) {
            for (let i = 0; i < elements.length; i++) {
                const start = a.slice(0, i);
                const ended = a.slice(i);

                yield [...start, first, ...ended];
            }
        }
    }
}
const result = [...permutations(arr)].map((el) => el.join(" ")).sort();

for (const a of result) {
    console.log(a);
}