function solution(arr) {
    let a, b;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
            a = i;
            break;
        }
    }
    
    if (arr.indexOf(2) === -1) return [-1];
    
    for (let i = arr.length; i > 0; i--) {
        if (arr[i] === 2) {
            b = i;
            break;
        }
    }
    
    return arr.slice(a, b + 1);
}