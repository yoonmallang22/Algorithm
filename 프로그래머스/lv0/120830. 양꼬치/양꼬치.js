function solution(n, k) {
    k -= ~~(n/10);
    return 12000 * n + 2000 * k;
}