function solution(survey, choices) {
    let result = '';
    const character = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']];
    const characterScore = {
        R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0
    };
    
    survey.forEach((v, i) => {
        characterScore[v[choices[i] > 4 ? 1 : 0]] += Math.abs(choices[i] - 4);
    })
        
    character.forEach(v => {
        if (characterScore[v[0]] >= characterScore[v[1]]) result += v[0];
        else result += v[1]
    })
    
    return result;
}