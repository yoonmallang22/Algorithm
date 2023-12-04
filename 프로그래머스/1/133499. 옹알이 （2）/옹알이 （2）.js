function solution(babbling) {
    const can = ['aya','ye','woo','ma'];
    return babbling.reduce((total, current) => {
        let babble = current;
        for (let i = 0; i < can.length; i++) {
            if (current.includes(can[i].repeat(2))) return total;
            babble = babble.split(can[i]).join(' ');
        }
        return total + (babble.split(' ').join('').length === 0);
    }, 0);
}