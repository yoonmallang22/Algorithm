function solution(n, words) {
    const arr = ['a', 'b', 'ccc']
    const game = [];
    const result = [0, 0];
    
    for (let i = 0; i < words.length; i++) {
        const last = game[game.length-1];
        if (game.includes(words[i]) || (last && last[last.length-1] !== words[i][0])) {
            if (!Math.floor((i+1)%n)) {
                result[0] = n;
            } else {
                result[0] = Math.floor((i+1)%n); 
            }
            if ((i+1)/n !== Math.floor((i+1)/n)) {
                result[1] = Math.floor((i+1)/n) + 1;
            } else {
                result[1] = Math.floor((i+1)/n);
            }
            
            break;
        }
        
        game.push(words[i]);
    }
    
    return result;
}