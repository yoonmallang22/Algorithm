function solution(keymap, targets) {
    const results = []
    for (const target of targets) {
        let result = 0;
        for (let i = 0; i < target.length; i++) {
            const counts = [];
            for (const key of keymap) {
                const count = key.indexOf(target[i]);
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
    }
    
    return results;
}