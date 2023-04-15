function solution(order) {
    const clap = new Set([3, 6, 9]);
    return order.toString().split('').map(v => +v).filter(v => clap.has(v)).length;
}