function solution(n) {
    const arr = new Array(n).fill().map(v => new Array(n).fill(0));
    
    let a = 1;
    let b = 1;

    while(a <= n*n){
        for (let i = b-1; i <= n-b; i++) {
            // console.log([b-1, i], a)
            arr[b-1][i] = a++;
        }
        for (let i = b; i <= n-b; i++) {
            // console.log([i, n-b] , a);
            arr[i][n-b] = a++;
        }
        for (let i = n-b-1; i >= b-1; i--) {
            // console.log([n-b, i], a);
            arr[n - b][i] = a++;
        }
        for (let i = n-b-1; i > b-1; i--) {
            // console.log([i, b-1], a);
            arr[i][b-1] = a++;
        }
        b++;
    }
    
    return arr;
}