function solution(number, limit, power) {
    return new Array(number).fill(0).map((_, i) => i + 1).map(v => {
        let cnt = 0;
        for (let i = 1; i <= Math.sqrt(v); i++) {
            if (v % i === 0) cnt += 2;
            if (v / i === i) cnt--;
        }
        return cnt;
    }).reduce((acc, cur) => acc + (cur > limit ? power : cur), 0);
}