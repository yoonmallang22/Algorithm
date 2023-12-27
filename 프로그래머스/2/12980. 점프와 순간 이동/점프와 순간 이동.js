function solution(n) {
    let result = 0;
    
    // 도착지점에서 거꾸로 되감기
    // 이동한 지점이 홀수일 경우 점프를, 짝수를 경우 순간 이동을 사용하여 이전 지점으로 되돌아감
    while (n !== 0) {
        if (n % 2 === 1) {
            result++;
            n -= 1;
        } else {
            n /= 2;
        }
    }

    return result;
}