function solution(n) {
    let cur = 1;
    let move = 1;
    let result = 1;
    
    while (cur < n) {
        if (cur + move === n) {
            break;
        }
        
        if (cur + move < n) {
            cur += move;
            move *= 2;
        } else {
            result++;
            move = 1;
            cur += move;
        }
    }
    
    return result;
}