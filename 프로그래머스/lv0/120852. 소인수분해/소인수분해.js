function solution(n) {
    let answer = [];
    let num = 2;
    while (num <= n){
        if (n % num === 0) {
            answer.push(num);
            n = n / num;
        } else {
            num++;
        }
    }
    return [...new Set(answer)].sort((a, b) => a - b);
}