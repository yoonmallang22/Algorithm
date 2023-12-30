function solution(people, limit) {
    let cnt = 0;
    people.sort((a, b) => b - a).forEach(v => {
        if (v + people[people.length-1] <= limit) people.pop();
        cnt++;
    });
    
    return cnt;
}