function solution(strArr) {
    const arr = strArr.map(v => v.length);
    let result = 0;
    for (let i = 1; i <= Math.max(...arr); i++) {
        if (result < arr.filter(v => v === i).length) result = arr.filter(v => v === i).length;
    }
    
    return result;
}