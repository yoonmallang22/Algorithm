function solution(n) {
    let arr = [n];
    while (n !== 1) {
        if (n === 1) break;
        else if (n % 2 === 0) n = n / 2;
        else if (n % 2 !== 0) n = 3 * n + 1;
        arr.push(n);
    }
    
    return arr;
}