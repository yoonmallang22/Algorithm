function solution(n) {
    if (n % 6 === 0) {
        return n / 6;
    } else {
        let gcd = 1;
        let lcm = 1;
        for (let i = 0; i <= 6; i++){
            if ((n % i === 0) && (6 % i === 0)){
                gcd = i;
            }
        }
        lcm = n * 6 / gcd;
        return lcm / 6;
    }
}