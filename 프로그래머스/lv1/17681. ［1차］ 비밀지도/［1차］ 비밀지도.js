function solution(n, arr1, arr2) {
    return Array(n).fill().map((_, i) => (arr1[i] | arr2[i]).toString(2).padStart(n, '0').replace(/0|1/g, v => +v ? '#' : ' '));
}