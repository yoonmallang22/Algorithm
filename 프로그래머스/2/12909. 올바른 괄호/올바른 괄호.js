function solution(s){
    if (s.length % 2 !== 0) return false;
    if (s[0] === ')' || s[s.length-1] === '(') return false;
    if (s.split('').filter(v => v === '(').length !== s.length / 2) return false;
    let left = 0;
    let right = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === '(' ? left++ : right++;
        if (left < right) return false;
    }
    
    return true;
}