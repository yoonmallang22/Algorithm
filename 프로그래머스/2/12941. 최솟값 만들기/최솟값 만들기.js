function solution(A,B){
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    return A.reduce((total, current, idx) => total + (current * B[idx]), 0);
}