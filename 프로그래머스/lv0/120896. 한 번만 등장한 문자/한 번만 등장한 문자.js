function solution(s) {
    return [...s].filter(v => s.match(new RegExp(v,'g')).length == 1).sort().join('');
}