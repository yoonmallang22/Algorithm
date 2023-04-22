function solution(my_string) {
    let answer = parseInt(my_string.split(' ')[0]);
    my_string.split(' ').forEach((v, i) => {
        if (v === '+') {
            answer += parseInt(my_string.split(' ')[i+1]);
        } else if (v === '-') {
            answer -= parseInt(my_string.split(' ')[i+1]);
        }
    });
    return answer;
}