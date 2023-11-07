function solution(s) {
    const word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    word.forEach((v, i) => {
        s = s.split(v).join(i);
    })
    
    return +s;
}