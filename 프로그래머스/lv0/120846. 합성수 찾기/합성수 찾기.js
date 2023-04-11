function solution(n) {
    let sum = 0;
    for (let i = 1; i < n+1; i++) {
        let num = 0;
        for (let j = 1; j < i+1; j++) {
            if (i % j === 0) {
                num++;
            } 
        }
        if (num >= 3) {
            sum++;
        }
    }
    return sum;
}