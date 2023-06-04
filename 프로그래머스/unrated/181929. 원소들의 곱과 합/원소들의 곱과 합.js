function solution(num_list) {
    let m = 1;
    let s = 0;
    for (item of num_list) {
        m *= item;
        s += item;
    }
    
    return m < s**2 ? 1 : 0; 
}