function solution(my_string, is_prefix) {
    return my_string.includes(is_prefix) && my_string.substring(0, is_prefix.length) === is_prefix ? 1 : 0;
}