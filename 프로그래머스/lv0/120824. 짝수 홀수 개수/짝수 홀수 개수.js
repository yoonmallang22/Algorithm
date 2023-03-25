function solution(num_list) {
    let answer = [0,0];
    for (let v of num_list) {
        answer[v%2] += 1;
    }
    return answer;
}