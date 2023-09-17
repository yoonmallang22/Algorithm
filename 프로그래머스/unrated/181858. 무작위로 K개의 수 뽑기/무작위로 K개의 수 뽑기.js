function solution(arr, k) {
    let result = [];
    
    arr.map(v => {
        if (result.indexOf(v) === -1) result.push(v);
    });
    
    if (result.length < k) {
        for (i = result.length; i < k; i++) result[i] = -1;
    } else if (result.length > k) {
        result.length = k;
    }
    
    return result;
}