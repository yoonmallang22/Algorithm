function solution(a, b) {
    const day = String(new Date(2016, a-1, b)).slice(0, 3);
    
    return day.toUpperCase();
}