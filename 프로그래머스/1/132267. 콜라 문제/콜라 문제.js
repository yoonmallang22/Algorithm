function solution(a, b, n) {
    let coke = 0;
    while (n >= a) {
        const left = n % a;
        coke += Math.floor(n / a) * b;
        n = Math.floor(n / a) * b + left;
    }
    
    return coke;
}