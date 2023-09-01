function solution(strArr) {
    let arr = Array(31).fill(0);
    for (let s of strArr) arr[s.length]++;
    
    return Math.max(...arr)
}