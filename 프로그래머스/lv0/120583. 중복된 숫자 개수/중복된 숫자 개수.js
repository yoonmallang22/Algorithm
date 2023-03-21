function solution(array, n) {
    let cnt = 0;
    for (i = 0 ; i < array.length; i++) {
        if (array[i] === n) cnt++;
    }
    return cnt;
}