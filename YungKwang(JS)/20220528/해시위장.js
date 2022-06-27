function solution(clothes) {
  const type = []
  const typeCountArr = []
  clothes.map(el => {
    if (!type.includes(el[1])) type.push(el[1])
    const index = type.indexOf(el[1])
    typeCountArr[index] = typeCountArr[index] ? typeCountArr[index] + 1 : 1
  })
  let answer = 1
  typeCountArr.map(el => answer *= el + 1)
  return answer - 1
}

// function solution(clothes) {
//   let type = new Set();
//   let name = new Set();
//   let answer = 0
//   search(clothes)
//   function search(arr) {
//     let deltype
//     let delname
//     arr.forEach((value, index, arr) => {
//       if (!name.has(value[0]) && !type.has(value[1])) {
//         name.add(value[0]);
//         type.add(value[1]);
//         answer++
//         delname = value[0]
//         deltype = value[1]
//         search(arr.slice(index + 1))
//       }
//       type.delete(deltype)
//       name.delete(delname)
//     });
//   }
//   return answer;
// }
