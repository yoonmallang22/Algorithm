function solution(order) {
    let money = 0;
    order.map(v => {
        if (v.includes('americano')) money += 4500;
        else if (v.includes('cafelatte')) money += 5000;
        else money += 4500;
    });
    
    return money;
}