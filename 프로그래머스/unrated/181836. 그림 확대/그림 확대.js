function solution(picture, k) {
    return picture.map(v => [...v].map(v => v.repeat(k)).join('')).map(v => {
        let arr = [];
        for(let i = 0; i < k; i++) {
            arr.push(v);
        }
        return arr;
    }).flat();
}