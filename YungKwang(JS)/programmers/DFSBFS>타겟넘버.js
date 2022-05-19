function solution(numbers, target) {
    let answer = 0;
    DFS(0,0)
    const DFS = (depth, num) => {
        if(depth === numbers.length){
            if(num === target){
                answer++
            }
            return;
        }
        // DFS(depth+1, num)
    }
    return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3))



