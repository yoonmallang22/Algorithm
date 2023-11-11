function solution(k, score) {
    const hallFame = [];
    const result = [];

    score.forEach(v => {
        if (hallFame.length < k) {
            hallFame.push(v);
        } else if (hallFame[k - 1] < v) {
            hallFame.pop();
            hallFame.push(v);
        }
        hallFame.sort((a, b) => b - a);
        
        result.push(Math.min(...hallFame));
    })
    
    return result;
}