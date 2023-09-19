function solution(a, b, c) {
    const cnt = new Set([a, b, c]).size;

    switch(cnt) {
        case 3: 
            return a + b + c;
            break;
        case 2: 
            return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
            break;
        case 1: 
            return (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
            break;
    }
}