function solution(my_string, s, e) {
    const fStr = my_string.slice(0, s);
    const lStr = my_string.slice(e + 1, my_string.length);
    return fStr + my_string.slice(s, e + 1).split('').reverse().join('') + lStr;
}