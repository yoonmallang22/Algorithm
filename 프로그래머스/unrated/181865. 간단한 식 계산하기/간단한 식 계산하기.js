function solution(binomial) {
    const op = binomial.split(' ')[1];
    const a = +binomial.split(' ')[0];
    const b = +binomial.split(' ')[2];

    if (op === '+') {
        return a + b;
    } else if (op === '-') {
        return a - b;
    } else if (op === '*') {
        return a * b;
    }
}