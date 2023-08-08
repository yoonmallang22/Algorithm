function solution(a, d, included) {
    let answer = 0;
    let arr = [a];
    for (let i = 0; i < included.length - 1; i++) {
        arr.push(arr[arr.length - 1] + d);
    }
    for (let i = 0; i < included.length; i++) {
        if (included[i]) answer += arr[i]
    }
    
    return answer;
}