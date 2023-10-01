function solution(arr, query) {
    let start = 0;
    let end = 0;

    for (let i = 0; i < query.length; i++) {
        if (i % 2 === 0) {
            end = start + query[i];
        } else {
            start += query[i];
        }
    }
    
    return arr.slice(start, end + 1);
}

