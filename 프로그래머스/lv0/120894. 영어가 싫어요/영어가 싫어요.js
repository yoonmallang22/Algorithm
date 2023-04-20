function solution(numbers) {
    let result;
    let num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    num.forEach((v, i) => numbers = numbers.split(v).join(i));
    return parseInt(numbers);
}