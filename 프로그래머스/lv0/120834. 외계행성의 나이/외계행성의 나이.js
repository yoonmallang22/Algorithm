function solution(age) {
    let answer = '';
    let newAge = age.toString();
    let str = 'abcdefghijklmnopqrstuvwxyz';
    for(let i = 0; i < newAge.length; i++){
        let num = newAge[i];
        answer += str[num];
    }
    return answer;
}