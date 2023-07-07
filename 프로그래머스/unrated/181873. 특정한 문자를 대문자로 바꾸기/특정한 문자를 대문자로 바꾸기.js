function solution(my_string, alp) {
    let answer = "";

    my_string.split("").map(v => {
        if (v === alp) {
            answer += v.toUpperCase();
        } else {
            answer += v;
        }
    })

    return answer;
}