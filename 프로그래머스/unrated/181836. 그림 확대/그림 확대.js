function solution(picture, k) {
    let arr = [];
    picture.map(v => {
        const str = [...v].map(v => v.repeat(k)).join('');
        for(let i = 0; i < k; i++) {
            arr.push(str);
        }
    });
    
    return arr;
}