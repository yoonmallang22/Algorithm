function solution(order) {
    let answer = order.toString().match(/[3,6,9]/g) ?? []
	return answer.length;
}