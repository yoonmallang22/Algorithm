function solution(d, budget) {
    let result = 0;
    d.sort((a,b) => a-b).forEach((v, i) => {
        budget -= v;
        if (budget >= 0) {
            result++;
        } 
    });
    
    return result;
}