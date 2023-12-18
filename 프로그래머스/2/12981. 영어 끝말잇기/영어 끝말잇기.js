function solution(n, words) {
    let fail_i = -1;
    
    for (let i = 1; i < words.length; i++) {
        let val = words[i];
        if (words.indexOf(val) !== i || words[i-1].substring(words[i-1].length-1) != val.substring(0, 1)) {
            fail_i = i;
            break;
        }
    }

    if (fail_i == -1) return [0,0];

    const num = fail_i%n + 1;
    const turn = Math.floor(fail_i/n) + 1; 

    return [num, turn];
}