function factorial(i) {
    let s = 1;
    let x = 1;
    while ( x <= i ) {
      s *= x;
      x++;
    }
    return s;
}

function solution(n) {
    let i = 1;
    while (n / factorial(i) >= i+1){
        i++;
    }
    return i;
}