function solution(num_list) {
    let m = num_list.reduce((a, b) => a * b, 1);
    let s = num_list.reduce((a, b) => a + b, 0);
    
    return m < s**2 ? 1 : 0; 
}