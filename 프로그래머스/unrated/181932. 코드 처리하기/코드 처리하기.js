function solution(code) {
    let ret = '';
    let mode = 0;
    
    for (let i = 0; i < code.length; i += 1) {
      if (code[i] === "1") {
        mode = mode ? 0 : 1;
      }
      if (code[i] !== "1" && i % 2 === mode) {
        ret += code[i];
      }
    }
    
    return ret ? ret : "EMPTY";
}