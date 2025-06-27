function solution(citations) {
    citations.sort((a, b) => b - a);
    
    let h = 0;
    for (let i = 0; i < citations.length; i++) {        
        // i번째 논문은 citations[i]번 인용됨
        if (citations[i] >= i + 1) {
            h = i + 1;
        } else {
            break;
        }
    }
    
    return h;
}