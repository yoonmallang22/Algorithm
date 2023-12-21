function solution(brown, yellow) {
    let result;
    let sum = brown + yellow;
    let arr = [];
    
    for (let i = 1; i <= sum; i++) {
        if (sum % i === 0 && i >= sum/i) arr.push([i, sum/i]);
    }
    
    arr.map(([a, b]) => {
        if (a + a + (b+b-4) === brown) result = [a, b];
    });
    
    return result;
}