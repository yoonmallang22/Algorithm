function solution(array) {
    array.sort((a, b) => a - b);
    let med = (1 + array.length) / 2 - 1;
    let answer = array[med];
    return answer;
}