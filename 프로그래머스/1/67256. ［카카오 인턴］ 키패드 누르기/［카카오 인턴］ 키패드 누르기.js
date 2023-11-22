function solution(numbers, hand) {
    const position = {
        1: [0, 3], 2: [1, 3], 3: [2, 3],
        4: [0, 2], 5: [1, 2], 6: [2, 2],
        7: [0, 1], 8: [1, 1], 9: [2, 1],
        '*': [0, 0], 0: [1, 0], '#': [2, 0]
    };
    const handed = {
        left: 'L', right: 'R'
    };
    
    let leftHand = position['*'];
    let rightHand = position['#'];
    
    return numbers.map(v => {
        if (v === 1 || v === 4 || v === 7) {
            leftHand = position[v];
            return 'L';
        } else if (v === 3 || v === 6 || v === 9) {
            rightHand = position[v];
            return 'R';
        } else {
            let leftHandDistance = Math.abs(leftHand[0] - position[v][0]) + Math.abs(leftHand[1] - position[v][1]);
            let rightHandDistance = Math.abs(rightHand[0] - position[v][0]) + Math.abs(rightHand[1] - position[v][1]);
            if (leftHandDistance < rightHandDistance) {
                leftHand = position[v];
                return 'L';
            } else if (leftHandDistance > rightHandDistance) {
                rightHand = position[v];
                return 'R';
            } else {
                hand === 'left' ? leftHand = position[v] : rightHand = position[v];
                return handed[hand];
            }
        }
    }).join('');
}