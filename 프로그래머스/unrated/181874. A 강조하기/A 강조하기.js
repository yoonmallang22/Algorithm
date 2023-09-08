function solution(myString) {
    return [...myString].map(v => (v === 'a' || v === 'A') ? v.toUpperCase() : v.toLowerCase()).join('');
}