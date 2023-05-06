function solution(keyinput, board) {
    let [x, y] = [0,0];
    let [maxX, maxY] = board;
    for (let item of keyinput) {
        switch(item){
            case 'up': if (y < maxY/2-1) y++; break;
            case 'down': if (-y < maxY/2-1) y--; break;
            case 'left': if (-x < maxX/2-1) x--; break;
            case 'right': if (x < maxX/2-1) x++; break;
        }
    }
    return [x, y];
}