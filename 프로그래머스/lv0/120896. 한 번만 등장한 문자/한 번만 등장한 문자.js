function solution(s) {
    let arr = [];
    for (const item of s) {
        if (s.indexOf(item) === s.lastIndexOf(item)) {
            arr.push(item);
        }
    }
    return arr.sort().join('');
}