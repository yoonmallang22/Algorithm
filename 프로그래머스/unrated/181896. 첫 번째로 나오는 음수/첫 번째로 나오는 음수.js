function solution(num_list) {
    const neg = num_list.filter(v => v < 0)[0];
    return  neg ? num_list.indexOf(neg) : -1;
}