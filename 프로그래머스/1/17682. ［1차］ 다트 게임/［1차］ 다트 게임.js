function solution(dartResult) {
    const scores = [];
    const bonuses = {
        S: 1, D: 2, T: 3
    };
    
    [...dartResult].forEach((v, i) => {
        const bonus = bonuses[v];
        
        if (bonus) {
            let score = (dartResult[i - 2] === '1' ? '10' : dartResult[i - 1]) ** bonus;
            
            if (dartResult[i + 1] === "#") score *= -1;
            
            if (dartResult[i + 1] === "*") {
                scores[scores.length - 1] *= 2;
                score *= 2;
            }
            
            scores.push(score);
        }
    })
    
    return scores.reduce((acc, cur) => acc + cur, 0);
}