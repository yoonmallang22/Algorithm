function solution(num_str) {
    return [...num_str].map(v => parseInt(v)).reduce((a, b) => a + b, 0);
}