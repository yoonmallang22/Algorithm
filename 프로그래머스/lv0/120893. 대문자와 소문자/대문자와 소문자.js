function solution(my_string) {
    let answer = "";
    for (const item of my_string) {
        if (item === item.toUpperCase()) {
            answer += item.toLowerCase();
        } else {
            answer += item.toUpperCase();
        }
    }
    return answer;
}