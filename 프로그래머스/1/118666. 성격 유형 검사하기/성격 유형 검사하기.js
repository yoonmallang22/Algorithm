function solution(survey, choices) {
    let result = '';
    const character = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']];
    const characterScore = {
        R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0
    };
    const score = {
        1: 3, 2: 2, 3: 1, 4: 0, 5: 1, 6: 2, 7: 3
    };
    
    survey.forEach((v, i) => {
        if (choices[i] > 4) {
            characterScore[v[1]] += score[choices[i]];
        } else {
            characterScore[v[0]] += score[choices[i]];
        }
    })
        
    character.forEach(v => {
        if (characterScore[v[0]] >= characterScore[v[1]]) result += v[0];
        else result += v[1]
    })
    
    return result;
}