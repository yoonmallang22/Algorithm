function solution(n) {
    const sieve = Array(n+1).fill(0).fill(1,0,2);
    
    for (let i = 2; i <= n; i++) {
	    if (sieve[i] === 1) continue;
        for (let j = 2*i; j <= n; j+=i){
            // i가 소수였을 경우, 그 다음 큰 배수부터 전부 1로 표시해 놓기
            // 예: i가 5였을 경우, 10부터 시작하여 15, 20, 25, ...를 전부 1로 표시
            sieve[j] = 1;
        }
    }
    
    return sieve.filter(v => v !== 1).length;
}
