function solution(l, r) {
    let result = [];
    for (let i = l; i <= r; i++) {
        if (i % 5 === 0 && !i.toString().includes('1') && !i.toString().includes('2') && !i.toString().includes('3') && !i.toString().includes('4') && !i.toString().includes('6') && !i.toString().includes('7') && !i.toString().includes('8') && !i.toString().includes('9') ) result.push(i);
    }
    
    return result.length !== 0 ? result : [-1];
}