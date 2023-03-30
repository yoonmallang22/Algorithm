function solution(emergency) {
    const newEmergency = emergency.slice('').sort((a,b)=>b-a);
    return emergency.map(v => newEmergency.indexOf(v)+1);
}