const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = `
123*+
`.trim().split('\n')

const A = input.shift().split("")

const math = ["*","/","+","-"]
let stack = []

A.forEach(e => {
    if(math.includes(e)){
        let num1 = +stack.pop()
        let num2 = +stack.pop()
        if(e==="*") stack.push(num2*num1)
        if(e==="/") stack.push(num2/num1)
        if(e==="+") stack.push(num2+num1)
        if(e==="-") stack.push(num2-num1)
    }else{
        stack.push(e)
    }

});

console.log(stack[0])