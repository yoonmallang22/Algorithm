function solution(num_str) {
    return [...num_str].reduce((a, b) => a + +b, 0);
}