function solution(angle) {
    let answer = [0, 90, 91, 180].filter(x => (angle >= x)).length;
    
    return answer;
}