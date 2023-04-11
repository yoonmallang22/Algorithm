function solution(n) {
    return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((v) => {
      let cnt = 0;
      for (let i = 1; i <= v; i++) {
        if (v % i === 0) cnt++;
      }
      return cnt >= 3;
    }).length;
}