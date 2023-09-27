function solution(lines) {
    const min = Math.min(...lines.flat());
    lines = lines.map(([start, end]) => [start - min, end - min]);
    const arr = new Array(3).fill().map(_ => new Array(Math.max(...lines.flat())).fill(0));
    lines.map(([s,e], idx) => {
        for(let i = s; i < e; i++) arr[idx][i] = 1
    });
    
    let answer = 0;
    
    for(let i = 0; i < Math.max(...lines.flat()); i++) {
        answer += (arr[0][i] + arr[1][i] + arr[2][i]) >= 2;
    }
    
    return answer;
}