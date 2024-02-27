function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swap;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
        if (!swap) {
            break;
        }
    }
    return arr;
}

console.log(bubbleSort([2,3,1,4,5]))

