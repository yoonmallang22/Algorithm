function solution(my_string) {
    const alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let arr = new Array(52).fill(0);
    
    [...my_string].map(v => arr[alp.indexOf(v)]++);
    
    return arr;
}