function solution(board, moves) {
    let result = 0;
    let basket = [];
    moves = moves.map(v => v-1);
    
    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[j][moves[i]] !== 0) {
                if (basket[basket.length - 1] === board[j][moves[i]]) {
                    basket.pop();
                    result += 2;
                }
                else {
                    basket.push(board[j][moves[i]]);
                }
                board[j][moves[i]] = 0;
                break;
            }
        }
    }

    return result;
}
    
