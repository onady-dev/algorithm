function solution(begin, target, words) {
    var answer = 0;
    var visited = [];
    var queue = [];
    if (!words.includes(target)) return 0;
    queue.push([begin, answer])
    while (queue) {
        var [word, count] = queue.shift();
        if (word === target) return count
        words.forEach(v => {
            var check = 0
            if (visited.includes(v)) return;
            for (var i = 0; i < v.length; i++) {
                if (v[i] !== word[i]) check++
            }
            if (check === 1) {
                queue.push([v, ++count])
                visited.push(v)
            }
        });
    }
    return answer;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]))