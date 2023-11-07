function solution(s) {
    const word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    word.forEach((v, i) => {
        if (s.includes(v)) s = s.replaceAll(v, i);
    })
    
    return +s;
}