/**

문제 설명
0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

제한 사항
numbers의 길이는 1 이상 100,000 이하입니다.
numbers의 원소는 0 이상 1,000 이하입니다.
정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

 */

function solution(numbers) {
    function comparison(leftStr, rightStr){
        const newLeftStr = `${leftStr}${leftStr}${leftStr}`.slice(0,4)
        const newRightStr = `${rightStr}${rightStr}${rightStr}`.slice(0,4)
        let result = false
        for(let i = 0; i <4; i++){
            if(Number(newLeftStr[i]) > Number(newRightStr[i])){
                result = true
                break;
            }else if(Number(newLeftStr[i]) < Number(newRightStr[i])){
                result = false
                break;
            }else{
                if(leftStr.length < rightStr.length){
                    result = true
                }else{
                    result = false
                }
            }
        }
        return result
    }

    function merge(leftArr, rightArr){
        const sortedArr = [];
        let l = 0;
        let r = 0;

        while(l < leftArr.length && r < rightArr.length){
            if(comparison(leftArr[l],rightArr[r])){
                sortedArr.push(leftArr[l])
                l++
            }else{
                sortedArr.push(rightArr[r])
                r++
            }
        }

        while(l < leftArr.length){
            sortedArr.push(leftArr[l]);
            l++
        }
        while(r < rightArr.length){
            sortedArr.push(rightArr[r]);
            r++
        }
        return sortedArr;
    }

    function mergeSort(arr){
        if(arr.length === 1){
            return arr;
        }
        const mid = Math.ceil(arr.length / 2)
        const leftArr = arr.slice(0,mid)
        const rightArr = arr.slice(mid)

        return merge(mergeSort(leftArr), mergeSort(rightArr))
    }
    if(numbers.filter((v)=>v!==0).length === 0){
        return '0'
    }
    const res = mergeSort(numbers.map((v)=>v.toString()))
    console.log(res)
    return res.join().replaceAll(',','')
}

// console.log(solution([6, 10, 2, 0])); // "62100"
// console.log(solution([3, 30, 34, 5, 9])); // "9534330"
// console.log(solution([1, 12, 127, 127, 126])); // "12712371236121"
// console.log(solution([1, 100, 101, 102])); // "1 1012 1011 101" [ '1', '1012', '1011', '101' ]
// console.log(solution( [97, 979, 978])); // ""
console.log(solution([21, 212])); // ""
