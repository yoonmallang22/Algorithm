function solution(n) {
    // 주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수와
    // 주어진 수의 홀수인 약수 개수는 같다.
    let result = 0;
    for (i = 1; i <= n; i++) {
        if (n % i === 0 && i % 2 === 1) result++;
    }
    
    return result;
}