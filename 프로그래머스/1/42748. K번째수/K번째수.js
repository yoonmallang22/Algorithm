function solution(array, commands) {
    const arr = [];
    
    for (let l = 0; l < commands.length; l++) {
        const [i, j, k] = commands[l];
        const result = array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
        arr.push(result);
    }
    
    return arr;
}