function solution(n) {
    // 어떠한 수를 2로 나누고, 그 몫을 또 2로 계속해서 나누면서 나오는 나머지들의 모든 합은
    // 어떠한 수를 이진수로 변환한 수의 1의 개수와 같다
    return n.toString(2).match(/1/g).length;
}