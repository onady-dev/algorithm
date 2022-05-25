function solution(clothes) {
  let type = new Set();
  let name = new Set();
  let answer = 0
  search(clothes)
  function search(arr) {
    let deltype
    let delname
    arr.forEach((value, index, arr) => {
      if (!name.has(value[0]) && !type.has(value[1])) {
        name.add(value[0]);
        type.add(value[1]);
        answer++
        delname = value[0]
        deltype = value[1]
        search(arr.slice(index + 1))
      }
      type.delete(deltype)
      name.delete(delname)
    });
  }
  return answer;
}

// const clothes = [
//   // answer = 5
//   ["yellowhat", "headgear"],
//   ["blueglasses", "eyewear"],
//   ["green_turban", "headgear"],
// ];
// const clothes = [
//   // answer = 3
//   ["crowmask", "face"],
//   ["bluesunglasses", "face"],
//   ["smoky_makeup", "face"],
// ];
// const clothes = [
//   // answer = 15
//   ["1", "a"],
//   ["2", "a"],
//   ["3", "b"],
//   ["4", "c"],
//   ["5", "c"],
// ];
const clothes = [
  // answer = 23
  ["1", "a"],
  ["2", "a"],
  ["3", "b"],
  ["4", "c"],
  ["5", "c"],
  ["6", "c"],
  ["7", "d"],
  ["8", "e"],
  ["9", "f"],
  ["10", "g"],
  ["11", "h"],
  ["12", "i"],
  ["13", "j"],
  ["14", "k"],
  ["15", "l"],
  ["16", "m"],
  ["17", "n"],
  ["18", "o"],
  ["19", "p"],
  ["20", "q"],
  ["21", "r"],
  ["22", "s"],
  ["23", "t"],
  ["24", "u"],
  ["25", "v"],
  ["26", "w"],
  ["27", "x"],
  ["28", "y"],
  ["29", "z"],
  ["30", "z"],
];

console.log(solution(clothes));
