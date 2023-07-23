function solution(num_list, n) {
    let arr = [];
    for(let i = 0; i < num_list.length; i++) {
        arr.push(num_list[n * i]);
        if (n * i + n >= num_list.length) break;
    }
    
    return arr;
}