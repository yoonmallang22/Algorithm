function solution(picture, k) {
    return picture.flatMap(v => Array(k).fill([...v].reduce((acc, cur) => acc + cur.repeat(k), '')));
}