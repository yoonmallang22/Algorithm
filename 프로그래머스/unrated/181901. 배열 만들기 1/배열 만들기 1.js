function solution(n, k) {
    return Array(n).fill(1).map((v, i) => v + i).filter(v => v % k === 0);
}