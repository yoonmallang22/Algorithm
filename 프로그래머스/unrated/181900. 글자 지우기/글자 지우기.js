function solution(my_string, indices) {
    let arr = my_string.split('');
    indices.map(v => arr.splice(v, 1, ' '));
    
    return arr.join('').replaceAll(' ', '');
}