function solution(board, moves) {
    let result = 0;
    let basket = [];
    moves = moves.map(v => v-1);
    
    for (let i = 0; i < moves.length; i++) {
        try {
            board.forEach(v => {
                if (v[moves[i]] !== 0) {
                    basket.push(v[moves[i]]);
                    v[moves[i]] = 0;
                    throw new Error("stop loop");
                }
            })
        } catch(e) {
            
        }
    }
        
    while(true) {
        let newBasket = [...basket];

        for (let i = 0; i < basket.length; i++) {
          if(basket[i] === basket[i + 1]) {
            basket.splice(i, 2);
            result += 2;
          }
        }

        if (newBasket.length === basket.length) break;
    }

    return result;
}
    
