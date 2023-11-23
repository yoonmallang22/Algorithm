function solution(survey, choices) {
    let result = '';
    const characterScore = {
        R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0
    };
    
    survey.forEach((v, i) => {
        characterScore[v[choices[i] > 4 ? 1 : 0]] += Math.abs(choices[i] - 4);
    });
    
    return `${characterScore.R >= characterScore.T ? 'R' : 'T'}${characterScore.C >= characterScore.F ? 'C' : 'F'}${characterScore.J >= characterScore.M ? 'J' : 'M'}${characterScore.A >= characterScore.N ? 'A' : 'N'}`;
}