function solution(array) {
    let str = ''
    for(const item of array){
        str += item;
    }
    return str.split('7').length - 1;
}