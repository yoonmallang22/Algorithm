function solution(s, skip, index) {
    let result = '';
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'].filter(v => ![...skip].includes(v));
    
    for (const c of s) {
        const newIdx = alphabet.indexOf(c) + index;
        result += alphabet[newIdx % alphabet.length];
    }
    
    return result;
}