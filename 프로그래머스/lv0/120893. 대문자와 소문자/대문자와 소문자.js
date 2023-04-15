function solution(my_string) {
    let answer = '';
    for (let item of my_string) {
        answer += item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
    }
    return answer;
}