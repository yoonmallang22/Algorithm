function solution(picture, k) {
    return picture.flatMap(v => Array(k).fill([...v].map(v => v.repeat(k)).join('')));
}