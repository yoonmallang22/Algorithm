function solution(l, r) {
    const result = new Array(r - l + 1).fill().map((_, i) => i + l).filter(v => !/[^05]/.test(v));
    
    return result.length !== 0 ? result : [-1];
}