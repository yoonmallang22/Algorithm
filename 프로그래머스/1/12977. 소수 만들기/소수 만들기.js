function isPrime(num) {
    // '1' 이하의 수는 소수가 아닙니다.
    if (num <= 1) return false;
    
    // '2'는 짝수 중에 유일한 소수이며, 짝수는 '2'를 공통적으로 약수로 가지기 때문에 소수가 아닙니다.
    if (num % 2 === 0) return num === 2 ? true : false;

    // Math.sqrt(num)로 제곱근을 계산하여 √num까지 나눠 떨어지는지 검사합니다.
    // '2' 이하의 수들과 짝수들은 위의 조건문에서 걸러지기 때문에 '3'부터 '2'씩 올라며 '3'이상의 홀수들을 검사합니다.
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        // num이 다른 수로 나눠 떨어진다면 그 수는 num의 약수입니다.
        // 이는 곧 '1'과 자신이외의 약수가 존재한다는 것이며, 이는 num이 소수가 아님을 의미합니다.
        if (num % i === 0) return false; 
    }
    
    // 모든 조건문에서 걸리지지 않은 자연수는 소수입니다.
    return true;
} 

function solution(nums) {
    let result = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            for (let k = j+1; k < nums.length; k++) {                
                if (isPrime(nums[i] + nums[j] + nums[k])) result++;
            }
        }
    }
    
    return result;
}