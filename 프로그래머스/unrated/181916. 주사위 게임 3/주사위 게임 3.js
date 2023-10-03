function solution(a, b, c, d) {
    const num = [0, 0, 0, 0, 0, 0];
    const arr = [a, b, c, d];
    
    arr.forEach(v => num[v - 1]++);
    
    if (num.includes(4)) {
        return 1111 * (num.indexOf(4) + 1);
    } else if (num.includes(3)) {
        return (10 * (num.indexOf(3) + 1) + (num.indexOf(1) + 1)) ** 2;
    } else if (num.includes(2) && num.includes(1)) {
        let result = 1;
        num.map((v, i) => {
            if (v === 1) {
                result *= (i + 1);
            }
        });
        return result;
    } else if (num.includes(2)) {
        let numArr = [];
        num.map((v, i) => {
            if (v == 2) {
                numArr.push(i + 1);
            }
        });
        let [p, q] = numArr;
        return (p + q) * Math.abs(p - q);
    } else {
        return Math.min(a, b, c, d);
    }
}