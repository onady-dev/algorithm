/* 
    20220617
*/
function solution(numbers, target) {
    let answer = 0
    DFS(0, 0)
    function DFS(num, depth) {
        if (depth === numbers.length) {
            if (num === target) {
                answer++
            }
            return
        }
        DFS(num + numbers[depth], depth + 1)
        DFS(num - numbers[depth], depth + 1)
    }
    return answer
}
console.log(solution([4, 1, 2, 1], 4))


/* 
function solution(numbers, target) {
    let answer = 0;
    DFS(0, 0)
    function DFS(depth, num) {
        if (depth === numbers.length) {
            if (num === target) {
                answer++
            }
            return;
        }
        DFS(depth + 1, num + numbers[depth])
        DFS(depth + 1, num - numbers[depth])
    }
    return answer;
}
*/



