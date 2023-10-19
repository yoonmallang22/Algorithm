function solution(arr) {
    const a = [...arr].sort((a, b) => b - a).pop();
    arr.splice(arr.indexOf(a), 1);
    
    return arr.length ? arr : [-1];
}