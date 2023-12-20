function solution(n) {
    let result = 1;
    for (let i = 1; i < n/2; i++) {
        let sum = i;
        for (let j = i+1; j < n; j++) {
            sum += j;
            if (sum > n) {
                break;
            }
            if (sum === n) {
                result++;
                break;
            }
        }
    }
    
    return result;
}