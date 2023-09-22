function solution(arr) {
    let n = Math.max(arr.length, ...arr.map(v => v.length));
    
    arr.map(v => {while (v.length < n) v.push(0)});
    while (arr.length < n) arr.push(Array(n).fill(0));
    
    return arr;
}