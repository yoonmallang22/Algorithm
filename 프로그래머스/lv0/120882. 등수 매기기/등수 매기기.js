function solution(score) {
    const newArr = score.map(v => (v[0] + v[1]) / 2);
    const newArrSort = [...newArr].sort((a, b) => b - a);
    
    return newArr.map(v => newArrSort.indexOf(v) + 1);
}