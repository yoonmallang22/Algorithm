function solution(num) {
    var result = 0;

    while (result < 500) {
        if (num === 1) return result;
        num = num % 2 === 0 ? num / 2 : num * 3 + 1;
        result++;
    }

    return -1;
}