function solution(my_string) {
    return [...my_string].map(v => +v).filter(v => !Number.isNaN(v)).reduce((acc, cur) => acc+cur, 0);
}