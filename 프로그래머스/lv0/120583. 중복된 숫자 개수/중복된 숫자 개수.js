function solution(array, n) {
    let newArray = array.filter(i => i === n);
    let cnt = newArray.length;
    return cnt;
}