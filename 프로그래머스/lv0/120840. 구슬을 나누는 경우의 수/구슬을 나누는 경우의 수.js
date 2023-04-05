function solution(balls, share) {
    return factorial(balls) / (factorial((balls-share)) * factorial(share));
}
function factorial(num) {
    let x = BigInt(1);
    for (let i = num; i > 0; i--) {
        x *= BigInt(i);
    }
    return x;
}