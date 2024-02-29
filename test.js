function reverseString(str){
    // let newStr = ''
    // for(let i = 0; i < str.length; i++){
    //     newStr = str[i] + newStr
    // }
    // return newStr

    if(str === '') return '';
    return reverseString(str.substring(1)) + str.charAt(0)
}

function testReverseString() {
    if(reverseString('str') !== 'rts') return 'fail'
    return 'success'
}

console.log(testReverseString());
