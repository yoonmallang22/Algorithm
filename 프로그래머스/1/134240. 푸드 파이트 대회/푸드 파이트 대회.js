function solution(food) {
    const player1 = [];
    const player2 = [];
    food.shift();
    food.forEach((val, idx) => {
        for (let i = 0; i < Math.floor(val/2); i++) {
            player1.push(idx+1);
            player2.unshift(idx+1);
        }
    })
    
    return [...player1, 0, ...player2].join('');
    
}