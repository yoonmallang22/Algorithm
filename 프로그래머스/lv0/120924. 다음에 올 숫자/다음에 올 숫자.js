function solution(common) {
    if (common[1] - common[0] === common[common.length - 1] - common[common.length - 2]) {
        // a + (n-1)*d
        return common[0] + common.length * (common[1] - common[0]);
    } else {
        // ar**(n-1)
        return common[0] * (common[1] / common[0]) ** common.length
    }
}