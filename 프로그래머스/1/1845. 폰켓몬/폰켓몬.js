function solution(nums) {
    const uniqueArrNums = nums.filter((v, i, arr) => arr.indexOf(v) === i);
    const result = Math.min(uniqueArrNums.length, nums.length / 2);

    return result;
}