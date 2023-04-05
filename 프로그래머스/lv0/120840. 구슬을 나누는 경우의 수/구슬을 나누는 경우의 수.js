function solution(balls, share) {
    return factorial(balls) / (factorial((balls-share)) * factorial(share));
}
function factorial(num) {
    return Array(num).fill(1).map((v,i) => BigInt(v+i)).reduce((a,v) => a*v, BigInt(1));
}