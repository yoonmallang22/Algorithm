function solution(num_list) {
    let even = '', odd = '';
    num_list.map(v => {
        if (v % 2 === 0) {
            even += v;
        } else {
            odd += v;
        }
    });
    
    return even * 1 + odd * 1;
}