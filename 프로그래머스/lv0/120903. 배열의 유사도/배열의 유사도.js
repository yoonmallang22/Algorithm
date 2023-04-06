function solution(s1, s2) {
    let num = 0;
    for (const i in s1){
        for (const j in s2){
            if(s1[i] === s2[j]) {
                num++;
            }
        }
    }
    return num;
}