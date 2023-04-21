function solution(array, n) {
    const newArr = array.sort((a, b) => a - b).map(v => Math.abs(v-n));
    const min = Math.min(...newArr);
    const idx = newArr.indexOf(min);
    return array[idx];
}