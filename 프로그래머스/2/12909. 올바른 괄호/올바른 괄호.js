function solution(s){
    let cnt = 0;
    
    for (let char of s) {
        cnt += char === '('? 1 : -1;
        if (cnt < 0) return false;
    }
    
    return cnt === 0 ? true : false;
}