function solution(numbers) {
    const strings = numbers.map(v => v+'');
    
    // a + b 와 b + a 중 큰 순서로 정렬
    strings.sort((a, b) => parseInt(b+a) - parseInt(a+b));
    
    // 예외 처리: 모두 0이면 '0' 리턴
    if (strings[0] === '0') return '0';
    
    return strings.join('');
}