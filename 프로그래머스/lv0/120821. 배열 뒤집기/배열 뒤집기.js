function solution(num_list) {
    let answer = [];
    num_list.forEach(i => answer.unshift(i));
    return answer;
}