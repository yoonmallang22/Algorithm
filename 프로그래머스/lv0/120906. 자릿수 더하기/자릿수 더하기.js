function solution(n) {
    return [...(n + '')].map(v => +v).reduce((acc, cur) => acc + cur, 0);
}