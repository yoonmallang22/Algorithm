function solution(array) {
    const newArray = array.slice().sort((a, b) => b - a)
    return [newArray[0], array.indexOf(newArray[0])];
}