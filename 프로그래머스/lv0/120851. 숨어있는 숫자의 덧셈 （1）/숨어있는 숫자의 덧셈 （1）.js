function solution(my_string) {
    let sum = 0;
    for (const item of my_string) {
        if (!isNaN(item)) sum += +item;
    }
    return sum;
}