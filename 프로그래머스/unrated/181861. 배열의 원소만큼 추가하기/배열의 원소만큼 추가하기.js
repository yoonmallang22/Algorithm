function solution(arr) {
    let answer = [];
    arr.map(v => new Array(v).fill(v).forEach(v2 => answer.push(v2)));
    
    return answer;
}