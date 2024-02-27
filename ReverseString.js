function reverseString(text) {
    // 1. for문
    // var result = ''
    // for(var i = text.length-1; i >=0; i--){
    //     result += text[i]
    // }
    // return result

    // 2. 내부함수
    return text.split("").reverse().join("");

    // 3. 재귀함수
    // if(text === '') return '';
    // return reverseString(text.substring(1)) + text.charAt(0)
}
console.log(reverseString('안녕하세요'));