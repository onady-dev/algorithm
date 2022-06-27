function solution(begin, target, words) {
    var answer = 0;
    var visited = []
    function DFS(word, i) {
        var chk = 0
        var alpahbet = word.split("")
        words[i].split("").forEach(v => {
            if (alpahbet.include(v)) chk++
        });
        if (chk === 1) DFS(words[i], i + 1)
    }

    return answer;
}

solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
console.log("word".split(""))