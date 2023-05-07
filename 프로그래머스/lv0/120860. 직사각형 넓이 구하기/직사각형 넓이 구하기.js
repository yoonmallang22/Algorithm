function solution(dots) {
    const x = [...new Set(dots.map(d => d[0]))];
    const y = [...new Set(dots.map(d => d[1]))];
    
    return Math.abs((x[0] - x[1]) * (y[0] - y[1]));
}