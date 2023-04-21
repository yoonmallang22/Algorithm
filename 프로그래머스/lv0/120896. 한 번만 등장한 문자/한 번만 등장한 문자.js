function solution(s) {
    const arr = [...new Set(s)].sort();
    let countArr = Array(arr.length).fill(0);
    for(let i of [...s]) {
        for(let j = 0; j < arr.length; j++) {
            if(i === arr[j]) countArr[j]++;
        }
    }
    
    let str = '';
    countArr.forEach((v, i) => {
        if(v === 1) str += arr[i];
    });
    
    return str;
}