function solution(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return arr1.length > arr2.length ? 1 : -1;
    } else {
        let arr1Sum = 0, arr2Sum = 0;
        arr1.forEach(v => arr1Sum += v);
        arr2.forEach(v => arr2Sum += v);
        return arr1Sum === arr2Sum ? 0 : arr1Sum > arr2Sum ? 1 : -1;
    }
}