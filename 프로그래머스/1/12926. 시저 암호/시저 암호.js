function solution(s, n) {
    return s.split('').map(v => {
        let ASCII = v.charCodeAt();
        if (ASCII >= 65 && ASCII <= 90) {
            ASCII += n;
            if (ASCII > 90) ASCII -= 26;
        } else if (ASCII >= 97 && ASCII <= 122) {
            ASCII += n;
            if (ASCII > 122) ASCII -= 26;
        }
        return String.fromCharCode(ASCII);
    }).join('');
}