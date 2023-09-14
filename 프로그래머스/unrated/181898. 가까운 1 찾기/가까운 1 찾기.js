function solution(arr, idx) {
    let answer;
    for (let i = idx; i < arr.length; i++) {
        if (arr[i] === 1) {
            answer = i;
            break;
        } else {
            answer = -1;
        }
    }
    
    return answer;
}