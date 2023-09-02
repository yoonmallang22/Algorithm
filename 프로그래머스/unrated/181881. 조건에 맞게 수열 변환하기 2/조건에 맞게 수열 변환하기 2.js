function solution(arr) {
    let idx = 0;
    let prevArr = arr;
    while(true) {
        const changeArr = prevArr.map(v => {
            if (v >= 50 && v % 2 === 0) return v / 2;
            else if (v < 50 && v % 2 !== 0) return v * 2 + 1;
            else return v;
        });
        
        const isAllSame = prevArr.every((v, i) => v === changeArr[i]);
        if (isAllSame) break;
        
        idx++;
        prevArr = changeArr;
    }
    
    return idx;
}