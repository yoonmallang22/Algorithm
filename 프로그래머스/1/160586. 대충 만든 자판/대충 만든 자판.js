function solution(keymap, targets) {
    const results = []
    targets.map(target => {
        let result = 0;
        for (let i = 0; i < target.length; i++) {
            const counts = [];
            for (let j = 0; j < keymap.length; j++) {
                const count = keymap[j].indexOf(target[i]);
                if (count !== -1) counts.push(count + 1);
            }
            if (counts.length) {
                result += Math.min(...counts);
            } else {
                result = -1;
                break;
            }
        }
        results.push(result);
    })
    
    return results;
}