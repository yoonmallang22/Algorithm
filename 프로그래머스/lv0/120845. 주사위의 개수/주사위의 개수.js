function solution(box, n) {
    const arr = box.map(v => ~~(v/n));
    return arr[0]*arr[1]*arr[2];
}