function solution(str_list) {
    const lIdx = str_list.indexOf('l');
    const rIdx = str_list.indexOf('r');
    
    if (lIdx !== -1 && rIdx === -1) return str_list.splice(0, lIdx);
    else if (rIdx !== -1 && lIdx === -1) return str_list.splice(rIdx + 1);
    else if (lIdx < rIdx) return str_list.splice(0, lIdx);
    else if (lIdx > rIdx) return str_list.splice(rIdx + 1);
    else if (lIdx === -1 && rIdx === -1) return [];
}