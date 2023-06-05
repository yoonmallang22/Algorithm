function solution(babbling) {
    let answer = 0;
    let can = ["aya", "ye", "woo", "ma"];
    
    for (const i in babbling) {
        let init = babbling[i];
        
        for (const j in can) {
            if (babbling[i].includes(can[j])) {
                init = init.replace(can[j], "");
            }
        }
        
        if (init.length === 0) {
            answer += 1;
        }
    }
    
    return answer;
}