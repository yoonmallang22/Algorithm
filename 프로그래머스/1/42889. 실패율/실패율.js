function solution(N, stages) {
    const failureRate = [];
    for (let i = 1; i <= N; i++) {
        failureRate.push([stages.filter(v => v === i).length / stages.filter(v => v >= i).length, i]);
    }
    
    return failureRate.sort((a, b) => b[0] - a[0]).map(v => v[1]);
}