function solution(s) {
    let cnt = 0;
    let zero = 0;
    
    while (s !== '1') {
        zero += s.split('0').length - 1;
        cnt++;
        s = s.replace(/0/g, '').length.toString(2);
    }
    
    return [cnt, zero];
}