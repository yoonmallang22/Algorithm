function solution(my_string) {
    return [...my_string].map(v => parseInt(v))
        .filter(v => !Number.isNaN(v))
        .sort((a, b) => a- b);
}