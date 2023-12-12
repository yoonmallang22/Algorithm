function solution(n) {
    const cnt1 = [...n.toString(2)].filter(v => v === '1').length;
    let num = n+1;
    
    while (n < num) {
        const cnt2 = [...num.toString(2)].filter(v => v === '1').length;

        if (cnt1 === cnt2) break;
        
        num++;
    }
    
    return num;
}