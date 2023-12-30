function solution(arr) {
    let lcm = 1;
    let multiple = 1;
    
    arr.sort((a, b) => a - b).forEach(v => {
        while (true) {
            if (lcm % multiple === 0 && lcm % v === 0) break;
            lcm++;
        }
        multiple = lcm;
    })
    
    return lcm;
}