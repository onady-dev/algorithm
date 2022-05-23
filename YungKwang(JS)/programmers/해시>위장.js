function solution(clothes) {
  let type = new Set();
  let name = new Set();
  let answer = 0
  search(clothes)
  function search(arr){
    arr.forEach((value, index, arr) => {
      if (!name.has(value[0]) && !type.has(value[1])) {
        name.add(value[0]);
        type.add(value[1]);
        answer++
        search(arr.slice(index + 1))
      }
      type.clear()
      name.clear()
    });
  }
  return answer;
}


const clothes = [
  // answer = 5
  ["yellowhat", "headgear"],
  ["blueglasses", "eyewear"],
  ["green_turban", "headgear"],
];
// const clothes = [
//     // answer = 3
//     ["crowmask", "face"],
//     ["bluesunglasses", "face"],
//     ["smoky_makeup", "face"],
//   ];
console.log(solution(clothes));
