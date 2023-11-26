function solution(nums) {
    let result = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            for (let k = j+1; k < nums.length; k++) {
                const num = nums[i] + nums[j] + nums[k];
                let divisorNum = 0;
                
                for (let d = 1; d <= num; d++) {
                    if (num % d === 0) divisorNum++;
                }
                
                if (divisorNum === 2) result++;
            }
        }
    }
    
    return result;
}