/* n칸을 점프하는 방법의 수를 dp[n]이라고 하면:
dp[1] = 1 (1)
dp[2] = 2 (1+1, 2)
dp[n] = dp[n-1] + dp[n-2]
- 마지막 점프가 1칸이면 dp[n-1]에서 1칸 더 뛰는 경우
- 마지막 점프가 2칸이면 dp[n-2]에서 2칸 더 뛰는 경우
*/

function solution(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    let a = 1, b = 2;
    for (let i = 3; i < n + 1; i++) {
        [a, b] = [b, (a + b) % 1234567];
    }
    return b;
}