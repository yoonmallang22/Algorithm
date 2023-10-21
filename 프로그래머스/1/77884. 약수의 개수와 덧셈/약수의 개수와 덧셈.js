function solution(left, right) {
    let result = 0;
    for (let i = left; i <= right; i++) {
        // 제곱근이 정수면 약수의 개수가 홀수다
        if (Number.isInteger(Math.sqrt(i))) {
            result -= i;
        } else {
            result += i;
        }
    }
    
    return result;
}