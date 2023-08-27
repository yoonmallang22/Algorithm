function solution(myStr) {
    return myStr.split('a').map(v => v.split('b')).flat().map(v => v.split('c')).flat().filter(v => v != "").length !== 0 ? myStr.split('a').map(v => v.split('b')).flat().map(v => v.split('c')).flat().filter(v => v != "") : ["EMPTY"]
}