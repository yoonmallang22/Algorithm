function solution(new_id) {
    new_id = new_id.toLowerCase().replace(/[^a-z0-9\-\_\.]/g, '').replace(/\.+/g, '.').replace(/^\./g, '').replace(/\.$/g, '');
    
    new_id = new_id.length === 0 ? new_id += 'a' : new_id;
    
    if (new_id.length >= 16) return new_id.slice(0, 15).replace(/\.$/g, '');
    if (new_id.length <= 2) return new_id + new_id[new_id.length-1].repeat(3 - new_id.length);   
    
    return new_id;
}