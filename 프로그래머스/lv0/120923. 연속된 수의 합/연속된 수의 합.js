function solution(num, total) {
    // n*(a + a+(n-1)*d)/2
    // total = num*(a + a+(num-1))/2
    const a = (total * 2 / num + 1 - num) / 2;
    let arr = Array(num).fill(0);
    return arr.map((_, i) => a + i);
}