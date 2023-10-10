function solution(strings, n) {
    let answer = [];
    
    for (let i = 0; i < strings.length; i++) {
        let str = strings[i][n];
        strings[i] = str + strings[i];
    }
    strings.sort();
    
    for (let i = 0; i < strings.length; i++) {
        answer.push(strings[i].slice(1));
    }

    return answer;
}