function solution(myStr) {
    const arr = myStr.split(/[abc]/).filter(v => v);
    
    return arr.length ? arr : ["EMPTY"];
}