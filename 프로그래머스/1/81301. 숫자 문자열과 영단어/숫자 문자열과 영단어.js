function solution(s) {
    const word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    word.forEach((v, i) => {
        if (s.includes(v)) s = s.replaceAll(v, number[i]);
    })
    
    return +s;
}