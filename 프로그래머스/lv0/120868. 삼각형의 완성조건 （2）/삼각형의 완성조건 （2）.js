function solution(sides) {
    let count = 0;
    const [max, min] = [Math.max(...sides), Math.min(...sides)];
    // sides에 가장 긴 변이 있는 경우
    for(let i = max - min + 1; i <= max; i++) {
        count++;
    }
    // 나머지 한 변이 가장 긴 변인 경우
    for(let i = max + 1; i < max + min; i++) {
        count++;
    }
    return count;
}