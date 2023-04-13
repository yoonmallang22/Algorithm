function solution(s) {
    const arr = s.split(' ');
    for (let i = 0; i < s.length; i++) {
        if (arr[i] === 'Z') {
            arr.splice(i-1, 2, 0);
        }
    }
    return arr.map(v => +v).reduce((acc, cur) => acc + cur, 0);
}