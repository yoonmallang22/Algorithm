function solution(n, m, section) {
    let cnt = 0;
    const arr = Array(n).fill(0);
    
    section = section.map(v => v - 1);
    section.forEach(v => {
        arr[v] = 1;
    });    
    section.forEach(v => {
        if (arr[v]) {
            arr.fill(0, v, v+m);
            cnt++;
        }
    });
    
    return cnt;
}