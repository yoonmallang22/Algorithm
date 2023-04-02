function solution(age) {
    let ageArr = String(age).split('');
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    let age962 = '';
    for (let i = 0; i < ageArr.length; i++) {
        age962 += alpha[ageArr[i]];
    }
    return age962;
}