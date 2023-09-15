function solution(picture, k) {
    return picture.map(v => [...v].map(v => {
        let str = '';
        for(let i = 0; i < k; i++) {
            str += v;
        }
        return str;
    }).join('')).map(v => {
        let arr = [];
        for(let i = 0; i < k; i++) {
            arr.push(v);
        }
        return arr;
    }).flat();
}