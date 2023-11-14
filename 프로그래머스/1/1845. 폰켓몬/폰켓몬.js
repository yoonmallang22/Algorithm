function solution(nums) {
    let obj = {};
    nums.forEach(v => obj[v] = v);

    const result = Math.min(Object.keys(obj).length, nums.length / 2);

    return result;
}