function solution(arr) {
    if (arr.length > arr[0].length) {
        arr.map(v => {
            for (let i = v.length; i < arr.length; i++) {
                v.push(0);
            }
        });
    } else if (arr.length < arr[0].length) {
        arr.push(...new Array(arr[0].length - arr.length).fill().map(v => new Array(arr[0].length).fill(0)))
    }
    
    return arr;
}