function solution(progresses, speeds) {
    const left = [];
    const ret = [];
    
    for(let i = 0; i < progresses.length; i++){
        left.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
    
    let count = 0;
    let maxDay = left[0];
    
    for(let i = 0; i < left.length; i++) {
        if (left[i] <= maxDay) {
            count++;
        } else {
            ret.push(count);
            count = 1;
            maxDay = left[i];
        }
    }
    ret.push(count);
    
    return ret;
}