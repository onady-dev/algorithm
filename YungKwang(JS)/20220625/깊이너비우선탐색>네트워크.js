function solution(n, computers) {
    let answer = 0;
    let visited = []
    for (let i = 0; i < n; i++) {
        if (!visited.includes(i)) {
            DFS(i)
            answer++
        }
    }

    function DFS(node) {
        visited.push(node)
        computers[node].map((v, i) => {
            if (i !== node && !visited.includes(i) && v === 1) {
                DFS(i)
            }
        })
    }

    return answer;
}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]))
