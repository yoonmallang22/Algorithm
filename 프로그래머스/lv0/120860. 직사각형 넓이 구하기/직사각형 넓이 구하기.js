function solution(dots) {
    const [dot1, dot2, dot3, dot4] = dots;
    const xDots = [...new Set([dot1[0], dot2[0], dot3[0], dot4[0]])].sort((a, b) => a - b);
    const yDots = [...new Set([dot1[1], dot2[1], dot3[1], dot4[1]])].sort((a, b) => a - b);
    return (xDots[1]-xDots[0]) * (yDots[1]-yDots[0]);
}