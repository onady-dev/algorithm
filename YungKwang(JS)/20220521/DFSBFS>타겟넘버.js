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




