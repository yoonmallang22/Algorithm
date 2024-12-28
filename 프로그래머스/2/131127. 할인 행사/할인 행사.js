function isShallowEqual(obj1, obj2) {
    const objKeys1 = Object.keys(obj1);
    const objKeys2 = Object.keys(obj2);
    
    if (objKeys1.length !== objKeys2.length) return false;
    
    for (const key of objKeys1) {
        const value1 = obj1[key];
        const value2 = obj2[key];
        
        if (value1 !== value2) return false;
    }
    
    return true;
}

function solution(want, number, discount) {
    const wantObj = {};
    
    for (let i = 0; i < want.length; i++) {
        wantObj[want[i]] = number[i];
    }

    let result = 0;
    
    for (let i = 0; i < discount.length - 9; i++) {
        const discount10d = {};
        for (let j = i; j < i + 10; j++) {
            if(wantObj[discount[j]]) {
                if (discount10d[discount[j]]) discount10d[discount[j]] += 1;
                else discount10d[discount[j]] = 1;
            }
        }
        
        if(isShallowEqual(discount10d, wantObj)) result += 1;
    }
    
    return result;
}