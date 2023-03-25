function solution(num_list) {
    let even = num_list.filter(i => i%2===0);
    let odd = num_list.filter(i => i%2!==0);
    return [even.length, odd.length];
}