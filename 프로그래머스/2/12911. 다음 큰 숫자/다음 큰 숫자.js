function solution(n) {
    const cnt1 = [...n.toString(2)].filter(v => v === '1').length;
    let cnt2 = 0;
    let num = n+1;
    
    while (cnt1 !== cnt2) {
        cnt2 = [...num.toString(2)].filter(v => v === '1').length;
        num++;
    }
    
    return num-1;
}