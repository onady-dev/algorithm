function solution(priorities, location) {
    let result = [] // 우선순위 정렬이 완료된 배열
    let queue = []  // 입력받은 배열을 키, 값을 갖는 배열로 바꿈
    let answer = 0

    priorities.map((v, i) => {
        queue.push({ key: i, value: v })
    })

    while (queue.length > 0) {
        let obj = queue.shift()
        let valueList = queue.map(v => v.value)
        if (Math.max(...valueList) > obj.value) {
            queue.push(obj)
        } else {
            result.push(obj)
        }
    }

    result.forEach((v, i) => {
        if (v.key === location) answer = i
    })

    return answer + 1
}

const test1 = [2, 1, 3, 2]
const test1L = 2
const test2 = [1, 1, 9, 1, 1, 1]
const test2L = 0


console.log(solution(test2, test2L))