function solution(bridge_length, weight, truck_weights) {
    const queue = new Array(bridge_length).fill(0);
    let sec = 0;
    let sum = 0;
    
    while (truck_weights.length) {
        const truckWeight = truck_weights[0];
        sum += truckWeight;
    
        sum -= queue.shift();
        sec += 1;
        
        if (sum <= weight) {
            queue.push(truck_weights.shift());
        } else {
            sum -= truckWeight;
            queue.push(0);
        }
    }
    
    return sec + bridge_length;
}