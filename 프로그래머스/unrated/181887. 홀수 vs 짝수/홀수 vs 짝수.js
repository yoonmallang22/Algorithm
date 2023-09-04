function solution(num_list) {
    let even = 0;
    let odd = 0;
    num_list.map((v, i) => {
        if ((i + 1) % 2) odd += v;
        else even += v;
    });
    
    return even >= odd ? even : odd;
}