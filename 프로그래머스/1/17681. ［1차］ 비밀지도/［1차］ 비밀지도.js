function solution(n, arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push((arr1[i] | arr2[i]).toString(2).padStart(n, '0').replace(/0/g,' ').replace(/1/g,'#'));
    }
    
    return result;
}