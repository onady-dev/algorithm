/**
문제 설명
ROR 게임은 두 팀으로 나누어서 진행하며, 상대 팀 진영을 먼저 파괴하면 이기는 게임입니다. 따라서, 각 팀은 상대 팀 진영에 최대한 빨리 도착하는 것이 유리합니다.

지금부터 당신은 한 팀의 팀원이 되어 게임을 진행하려고 합니다. 다음은 5 x 5 크기의 맵에, 당신의 캐릭터가 (행: 1, 열: 1) 위치에 있고, 
상대 팀 진영은 (행: 5, 열: 5) 위치에 있는 경우의 예시입니다.

최단거리1_sxuruo.png

위 그림에서 검은색 부분은 벽으로 막혀있어 갈 수 없는 길이며, 흰색 부분은 갈 수 있는 길입니다. 
캐릭터가 움직일 때는 동, 서, 남, 북 방향으로 한 칸씩 이동하며, 게임 맵을 벗어난 길은 갈 수 없습니다.
아래 예시는 캐릭터가 상대 팀 진영으로 가는 두 가지 방법을 나타내고 있습니다.

첫 번째 방법은 11개의 칸을 지나서 상대 팀 진영에 도착했습니다.
최단거리2_hnjd3b.png

두 번째 방법은 15개의 칸을 지나서 상대팀 진영에 도착했습니다.
최단거리3_ntxygd.png

위 예시에서는 첫 번째 방법보다 더 빠르게 상대팀 진영에 도착하는 방법은 없으므로, 이 방법이 상대 팀 진영으로 가는 가장 빠른 방법입니다.

만약, 상대 팀이 자신의 팀 진영 주위에 벽을 세워두었다면 상대 팀 진영에 도착하지 못할 수도 있습니다. 예를 들어, 다음과 같은 경우에 당신의 캐릭터는 상대 팀 진영에 도착할 수 없습니다.

최단거리4_of9xfg.png

게임 맵의 상태 maps가 매개변수로 주어질 때, 캐릭터가 상대 팀 진영에 도착하기 위해서 지나가야 하는 칸의 개수의 최솟값을 return 하도록 solution 함수를 완성해주세요. 
단, 상대 팀 진영에 도착할 수 없을 때는 -1을 return 해주세요.

제한사항
maps는 n x m 크기의 게임 맵의 상태가 들어있는 2차원 배열로, n과 m은 각각 1 이상 100 이하의 자연수입니다.
n과 m은 서로 같을 수도, 다를 수도 있지만, n과 m이 모두 1인 경우는 입력으로 주어지지 않습니다.
maps는 0과 1로만 이루어져 있으며, 0은 벽이 있는 자리, 1은 벽이 없는 자리를 나타냅니다.
처음에 캐릭터는 게임 맵의 좌측 상단인 (1, 1) 위치에 있으며, 상대방 진영은 게임 맵의 우측 하단인 (n, m) 위치에 있습니다.
 */

// function solution(maps) {
//     const N = maps.length
//     const M = maps[0].length
//     const visitedinit = maps.map(v=>v.map(_=>true));
//     const counts = []
//     function dfs(n, m, count, visited){
//         const newVisited = visited.map(v=>v.slice())
//         if(n === N-1 && m === M-1){
//             counts.push(count)
//             return
//         }
//         if(n+1 < N && newVisited[n+1][m] && maps[n+1][m] === 1){
//             newVisited[n][m] = false
//             dfs(n+1, m, count+1, newVisited)
//         }
//         if(m+1 < M && newVisited[n][m+1] && maps[n][m+1] === 1){
//             newVisited[n][m] = false
//             dfs(n, m+1, count+1, newVisited)
//         }
//         if(n-1 >= 0 && newVisited[n-1][m] && maps[n-1][m] === 1){
//             newVisited[n][m] = false
//             dfs(n-1, m, count+1, newVisited)
//         }
//         if(m-1 >= 0 && newVisited[n][m-1] && maps[n][m-1] === 1){
//             newVisited[n][m] = false
//             dfs(n, m-1, count+1, newVisited)
//         }
//     }
//     dfs(0,0,1,visitedinit)
//     return counts.length === 0 ? -1 : Math.min(...counts)
// }

function solution(maps) {
    const N = maps.length
    const M = maps[0].length
    const visitedinit = maps.map(v=>v.map(_=>true));
    let answer = -1
    
    function bfs(depth, queue) {
        if(queue.length === 0) return
        const newQueue = []
        while(queue.length > 0){
            const [n,m] = queue.pop();
            if(n === N-1 && m === M-1){
                answer = depth+1
                return
            }else{
                visitedinit[n][m] = false
                if(n+1 < N && visitedinit[n+1][m] && maps[n+1][m] === 1){
                    newQueue.push([n+1, m])
                    visitedinit[n+1][m] = false
                }
                if(m+1 < M && visitedinit[n][m+1] && maps[n][m+1] === 1){
                    newQueue.push([n, m+1])
                    visitedinit[n][m+1] = false
                }
                if(n-1 >= 0 && visitedinit[n-1][m] && maps[n-1][m] === 1){
                    newQueue.push([n-1, m])
                    visitedinit[n-1][m] = false
                }
                if(m-1 >= 0 && visitedinit[n][m-1] && maps[n][m-1] === 1){
                    newQueue.push([n, m-1])
                    visitedinit[n][m-1] = false
                }
            }
        }
        bfs(depth+1, newQueue)
    }

    bfs(0, [[0,0]])
    return answer
}

// console.log(solution([
//     [1,1,1,1,1,1],
//     [1,1,1,1,1,1],
//     [1,1,1,1,1,1],
//     [1,1,1,1,1,1],
//     [1,1,1,1,1,1]
// ])); // 11
// console.log(solution([
//     [1, 0, 1, 1, 1], 
//     [1, 0, 1, 0, 1], 
//     [1, 1, 1, 1, 1], 
// ])); // 9
console.log(solution([
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
])); // -1
