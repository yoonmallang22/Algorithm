function solution(x) {
    const sum = [...(x + '')].reduce((acc, cur) => acc + +cur, 0);
    
    return x % sum ? false : true;
}