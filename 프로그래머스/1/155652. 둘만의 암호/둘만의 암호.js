function solution(s, skip, index) {
    let result = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    for (const c of s) {
        const arr = [];
        let i = (alphabet.indexOf(c) + 1) % 26;
        while (arr.length !== index) {
            if (!skip.includes(alphabet[i])) {
                arr.push(alphabet[i]);
            }
            i = (i+1) % 26;
        }
        result += arr.pop();
    }
    
    return result;
}