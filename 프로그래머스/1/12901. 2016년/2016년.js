function solution(a, b) {
    const dayList = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    const monthlyDayArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let daySum;
    
    if (a < 2) {
        daySum = b - 1;
    } else {
        daySum = monthlyDayArr.slice(0, a-1).reduce((a, b) => a + b, 0) + b - 1;
    }
    
    return dayList[daySum % 7];
}