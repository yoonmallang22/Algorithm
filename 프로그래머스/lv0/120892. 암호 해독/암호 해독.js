function solution(cipher, code) {
    let arr = '';
    for (let i = code - 1; i < cipher.length; i += code) {
        arr += cipher[i];
    }
    return arr;
}