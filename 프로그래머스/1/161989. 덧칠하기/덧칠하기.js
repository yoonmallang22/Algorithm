function solution(n, m, section) {
    let cnt = 0;
    let part = 0;
    
    section.forEach(v => {
        if (v > part) {
          part = v + m - 1;
          cnt++;
        }
    });
    
    return cnt;
}