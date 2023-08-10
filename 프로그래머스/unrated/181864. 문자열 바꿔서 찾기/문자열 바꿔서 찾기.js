function solution(myString, pat) {
    let newString = '';
    for (let i = 0; i < myString.length; i++) {
        myString[i] === "A" ? newString += "B" : newString += "A";
    }
    
    return newString.includes(pat) ? 1 : 0;
}