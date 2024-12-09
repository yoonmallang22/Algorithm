function solution(board, moves) {
    const stack = [];
    let cnt = 0;
    
    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[j][moves[i]-1] !== 0) {
                if (stack.length > 0 && board[j][moves[i]-1] === stack[stack.length-1]) {
                    stack.pop();
                    cnt += 2;
                } else {
                    stack.push(board[j][moves[i]-1]);
                }
                
                board[j][moves[i]-1] = 0;
                break;
            }
        }
    }
    
    return cnt;
}