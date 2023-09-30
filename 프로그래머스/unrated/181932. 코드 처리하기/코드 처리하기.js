function solution(code) {
    let ret = '';
    let mode = 0;
    
    [...code].map((v, idx) => {
        if (v === "1") {
            mode = mode ? 0 : 1;
        } else {
            if (idx % 2 === mode) {
                ret += v;
            }
        }
    });
    
    return ret ? ret : "EMPTY";
}