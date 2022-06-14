// function solution(sentence) {
//     const set = new Set(
//         sentence
//             .replace(/[^a-zA-Z]/g, "")
//             .toLowerCase()
//             .split("")
//     )
//     if (set.size === 26) return "perfect"

//     const answer = []
//     const alphabet = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));
//     alphabet.map(v => { if (!set.has(v)) answer.push(v) })

//     return answer.sort().join("")
// }


// function solution(s) {
//     let answer = 0
//     let check = 0
//     s.map((v, i) => {
//         if (i % 2 === check) {
//             if (v > s[i + 1]) {
//                 answer++
//                 check = check === 0 ? 1 : 0
//             }
//         } else {
//             if (v < s[i + 1]) {
//                 answer++
//                 check = check === 0 ? 1 : 0
//             }
//         }
//     })
//     return answer
// }

function solution(part_times) {
    let visited = []
    let answer = []
    for (index in part_times) {
        DFS(part_times[index], index, part_times)
    }

    function DFS(node, index, part_times) {
        console.log(index, part_times.length)
        visited.push(index)
        for (let i = index; i < part_times.length; i++) {
            if (!visited.includes(i) && node[1] <= part_times[i][0]) {
                DFS(part_times[i], i, part_times)
            }
        }
        if (index === part_times.length - 1) {
            console.log(visited)
            let C = 0
            visited.map(v => {
                C += part_times[v][2]
            })
            answer.push(C)
            visited = []
        }
    }
    return Math.max(...answer)
}


console.log(solution([[1, 2, 1], [1, 2, 2], [2, 3, 1], [3, 4, 1], [1, 4, 2]]))
