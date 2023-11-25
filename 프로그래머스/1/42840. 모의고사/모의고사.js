function solution(answers) {
    const result = [];
    
    const student1 = [1, 2, 3, 4, 5];
    const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const student1Score = [...answers].filter((v, i) => v === student1[i % student1.length]).length;
    const student2Score = [...answers].filter((v, i) => v === student2[i % student2.length]).length;
    const student3Score = [...answers].filter((v, i) => v === student3[i % student3.length]).length;
    
    const scores = [student1Score, student2Score, student3Score];
    const highScore = Math.max(...scores);
    
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === highScore) result.push(i+1);
    }
    
    return result;
}