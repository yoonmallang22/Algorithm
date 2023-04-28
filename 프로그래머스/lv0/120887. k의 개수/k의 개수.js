function solution(i, j, k) {
    let arr = [];
    let cnt = 0;
    for(let x = i; x < j+1; x++) {
        arr.push(x);
    }
    return [...arr.join('')].filter(v => v == k).length;
}