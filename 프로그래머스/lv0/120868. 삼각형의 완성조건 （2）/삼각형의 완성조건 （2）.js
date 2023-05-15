function solution(sides) {
    // max - min < x < max + min
    return Math.min(...sides) * 2 - 1;
}