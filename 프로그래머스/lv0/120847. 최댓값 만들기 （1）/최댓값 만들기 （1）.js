function solution(numbers) {
    const arr = numbers.sort((a, b) => a- b);
    return arr[arr.length-1] * arr[arr.length-2];
}