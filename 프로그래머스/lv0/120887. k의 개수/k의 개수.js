function solution(i, j, k) {
    let str = '';
    for(i; i < j+1; i++) {
        str += i;
    }
    return str.split(k).length - 1;
}