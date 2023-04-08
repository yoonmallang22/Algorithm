function solution(num_list, n) {
    const arr = []
    const list_length = num_list.length;
    for(let i = 0; i < list_length/n; i++){
        arr.push(num_list.splice(0, n));
    }
    return arr;
}