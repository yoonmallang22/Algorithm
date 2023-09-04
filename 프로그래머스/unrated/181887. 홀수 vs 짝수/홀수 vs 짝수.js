function solution(num_list) {
    let even = 0;
    let odd = 0;
    num_list.map((_, i) => {
        if ((i + 1) % 2) odd += num_list[i];
        else even += num_list[i];
    });
    
    return even >= odd ? even : odd;
}