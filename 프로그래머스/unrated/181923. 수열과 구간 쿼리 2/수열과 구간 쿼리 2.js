function solution(arr, queries) {
    let result = [];
    
    for (let [s, e, k] of queries) {
        let newArr = [];
        
        for (let i = s; i <= e; i++) {
            if (k < arr[i]) {
                newArr.push(arr[i]);
            }
        }
        
        if (newArr.length === 0) {
            result.push(-1);
        } else {
            result.push(Math.min(...newArr));
        }
    }
    
    return result;
}