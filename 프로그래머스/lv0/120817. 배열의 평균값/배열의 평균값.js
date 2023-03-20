function solution(numbers) {
    let add = 0;
    for (var i = 0; i < numbers.length; i++) {
        add += numbers[i];
    }
    var answer = add / numbers.length;
    return answer;
}