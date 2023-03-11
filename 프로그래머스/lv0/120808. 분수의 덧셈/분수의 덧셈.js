function fnGCD(a, b) {
    return (a % b) ? fnGCD(b, a % b) : b;
}

function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1 * denom2 + numer2 * denom1;
    let denom = denom1 * denom2;
    
    let gcd = fnGCD(numer, denom);
    
    let answer = [numer / gcd, denom / gcd];
    return answer;
}