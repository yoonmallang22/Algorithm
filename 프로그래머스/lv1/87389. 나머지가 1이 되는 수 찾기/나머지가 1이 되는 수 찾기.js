function solution(n) {
    let result;
    for (let i = 0; i < n; i++) {
        if (n % i === 1) {
            result = i;
            break;
        }
    }
    
    return result;
}