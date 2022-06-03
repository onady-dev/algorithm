function solution(input) {
  const supoja1 = [1, 2, 3, 4, 5] //5
  const supoja2 = [2, 1, 2, 3, 2, 4, 2, 5] //8
  const supoja3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] //10

  let s1 = input.filter((v, i, arr) => v === supoja1[i % supoja1.length]).length
  let s2 = input.filter((v, i, arr) => v === supoja2[i % supoja2.length]).length
  let s3 = input.filter((v, i, arr) => v === supoja3[i % supoja3.length]).length

  const max = Math.max(s1, s2, s3)

  let answer = []
  if (max === s1) answer.push(1)
  if (max === s2) answer.push(2)
  if (max === s3) answer.push(3)

  return answer
}

// function solution(input) {
//   let answer = [];
//   let list = [
//     { name: 1, value: 0 },
//     { name: 2, value: 0 },
//     { name: 3, value: 0 }
//   ]
//   const supoja1 = [1, 2, 3, 4, 5];
//   const supoja2 = [2, 1, 2, 3, 2, 4, 2, 5];
//   const supoja3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//   for (const [index, value] of input.entries()) {
//     if (value === supoja1[index % supoja1.length]) {
//       list[0].value++
//     }
//     if (value === supoja2[index % supoja2.length]) {
//       list[1].value++
//     }
//     if (value === supoja3[index % supoja3.length]) {
//       list[2].value++
//     }
//   }

//   let sort = list.sort((a, b) => {
//     return b.value - a.value;
//   })

//   for (const [index, value] of sort.entries()) {
//     if (index === 0) {
//       answer.push(value.name)
//     } else if (value.value === sort[index - 1].value) {
//       answer.push(value.name)
//     } else {
//       break
//     }
//   }

//   return answer;
// }
