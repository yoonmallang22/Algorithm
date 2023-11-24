function solution(queue1, queue2) {
    let arr = [...queue1, ...queue2];
    let sum = arr.reduce((acc, cur) => acc + cur, 0);
    let start = 0;
    let end = queue1.length;
    let pointer = sum / 2;
    let total = arr.slice(start, end).reduce((acc, cur) => acc+cur, 0);
    let count = 0;
    
    while (end <= arr.length) {
        if (total === pointer) {
            return count;
        } else if (total < pointer) {
            total += arr[end];
            end++;
        } else if (total > pointer) {
            total -= arr[start];
            start++;
        }
        
        count++;
    }
    
    return -1;
}