function solution(n) {
    const arr = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        arr.push(BigInt(arr[i-2]) + BigInt(arr[i-1]));
    }
    
    return arr[n] % 1234567n;
}