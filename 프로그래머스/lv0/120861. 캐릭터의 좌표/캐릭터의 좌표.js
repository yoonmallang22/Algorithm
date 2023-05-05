function solution(keyinput, board) {
    let [x, y] = [0, 0];
    let [maxX, maxY] = board;
    for (item of keyinput) {
        if (item === "up") {
            (y >= Math.floor(maxY/2)) ? y = Math.floor(maxY/2) : y++;
        } else if (item === "down") {
            (y <= -Math.floor(maxY/2)) ? y = -Math.floor(maxY/2) : y--;
        } else if (item === "left") {
            (x <= -Math.floor(maxX/2)) ? x = -Math.floor(maxX/2) : x--;
        } else if (item === "right") {
            (x >= Math.floor(maxX/2)) ? x = Math.floor(maxX/2) : x++;
        }
    }
    
    return [x, y];
}