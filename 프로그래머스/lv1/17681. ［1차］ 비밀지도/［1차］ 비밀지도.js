function solution(n, arr1, arr2) {
    let entireMap = new Array(n).fill('');
    
    arr1.map(v => v.toString(2).padStart(n, '0')).map((val, idx) => {
        for (let i = 0; i < val.length; i++) {
            if (val[i] === '1') {
                entireMap[idx] += '#';
            } else {
                entireMap[idx] += ' ';
            }
        }
    });
    
    arr2.map(v => v.toString(2).padStart(n, '0')).map((val, idx) => {
        for (let i = 0; i < val.length; i++) {
            if (val[i] === '1') {
                entireMap[idx] = entireMap[idx].slice(0, i) + '#' + entireMap[idx].slice(i + 1);
            }
        }
    });
    
    return entireMap;
}