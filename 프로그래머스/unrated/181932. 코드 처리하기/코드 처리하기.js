function solution(code) {
    let ret = '';
    let mode = 0;
    
    [...code].map((v, idx) => {
        if (mode === 0) {
            if (v !== "1") {
                if (idx % 2 === 0) {
                    ret += v;
                }
            } else {
                mode = 1;
            }
        } else {
            if (v !== "1") {
                if(idx % 2 !== 0) {
                    ret += v;
                }
            } else {
                mode = 0;
            }
        }
    });
    
    return ret ? ret : "EMPTY";
}