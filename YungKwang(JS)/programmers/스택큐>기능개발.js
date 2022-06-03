function solution(progresses, speeds) {
    let answer = [];
    let day = 0
    let clear = 0
    progresses.map((v, i, arr) => {
        if (day * speeds[i] < 100 - v) {
            if (clear > 0) answer.push(clear)
            day = Math.ceil((100 - v) / speeds[i])
            clear = 1
        } else {
            clear++
        }
        if (arr.length - 1 === i) answer.push(clear)
    });
    return answer;
}
