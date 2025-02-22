function solution(s, skip, index) {
    let result = '';
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    for (i = 0; i < s.length; i++) {
        const arr = [];
        let j = (alphabet.indexOf([...s][i]) + 1) % 26;
        while (arr.length !== index) {
            if (!skip.includes(alphabet[j])) {
                arr.push(alphabet[j]);
            }
            j = (j+1) % 26;
        }
        result += arr.pop();
    }
    
    return result;
}