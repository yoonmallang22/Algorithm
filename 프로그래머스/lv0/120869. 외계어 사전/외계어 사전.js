function solution(spell, dic) {
    return dic.map(v => [...new Set(v)].join(''))
        .filter(v => {
        let cnt = 0;
        for (item of spell) {
            if(v.includes(item)) {
                cnt += 1;
            }
        }
        return cnt === spell.length
    }).length > 0 ? 1 : 2
}