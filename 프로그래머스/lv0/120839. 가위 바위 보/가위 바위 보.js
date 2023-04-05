function solution(rsp) {
    const rspArr = rsp.split('');
    let str = '';
    for (let i = 0; i < rspArr.length; i++) {
        if (rspArr[i] === '2') {
            str += '0'
        } else if (rspArr[i] === '0') {
            str += '5'
        } else if (rspArr[i] === '5') {
            str += '2'
        }
    }
    return str;
}