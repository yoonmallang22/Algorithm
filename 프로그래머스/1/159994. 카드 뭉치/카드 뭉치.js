function solution(cards1, cards2, goal) {
    let arr = [];
    
    goal.forEach((v) => {
        if(cards1[0] === v) arr.push(cards1.shift());
        if(cards2[0] === v) arr.push(cards2.shift());
    })
    
    return arr.toString() === goal.toString() ? 'Yes' : 'No';
}