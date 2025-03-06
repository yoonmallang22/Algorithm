function solution(bridge_length, weight, truck_weights) {
    const bridge_queue = new Array(bridge_length).fill(0);
    let sec = 0;
    let current_weight = 0;
    
    while (truck_weights.length) {    
        current_weight -= bridge_queue.shift();
        
        if (current_weight + truck_weights[0] <= weight) {
            const truck_weight = truck_weights.shift();
            bridge_queue.push(truck_weight);
            current_weight += truck_weight;
        } else {
            bridge_queue.push(0);
        }
        
        sec += 1;
    }
    
    return sec + bridge_length;
}