function solution(k, m, score) {
    let result = 0;
    const sortedScore = [...score].sort((a, b) => a - b).slice(score.length % m);
    
    for (let i = 0; i < sortedScore.length; i += m) {
        result += sortedScore[i] * m;
    }
    
    return result;
}