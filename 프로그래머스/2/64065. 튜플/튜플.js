function solution(s) {
    return [...new Set(JSON.parse(s.replace(/\{/g, '[').replace(/\}/g, ']')).sort((a, b) => a.length - b.length).flat())];
}