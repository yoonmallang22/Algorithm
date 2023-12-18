function solution(n, words) {
    const game = [];
    const result = [0, 0];

    for (let i = 0; i < words.length; i++) {
        const last = game[game.length-1];
        if (game.includes(words[i]) || (last && last.substring(last.length-1) !== words[i].substring(0,1))) {
            result[0] = i%n + 1;
            result[1] = Math.floor(i/n) + 1; 
            break;
        }

        game.push(words[i]);
    }

    return result;
}