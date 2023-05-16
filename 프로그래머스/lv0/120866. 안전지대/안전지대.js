function solution(board) {
  // 위, 아래, 좌, 우, 대각선 칸 확인을 위한 셋팅
  const dx = [1, 0, -1, 0, 1, 1, -1, -1];
  const dy = [0, 1, 0, -1, 1, -1, 1, -1];

  const n = board.length;
    
  // 안전한 지역 개수를 모든 칸으로 설정
  let answer = n * n;

  // 지뢰가 있는 지역
  const point = [];

  // 지뢰가 있는 지역 확인
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        // 지뢰를 발견했다면 point에 그 칸의 위치 push
        point.push([i, j]);
        // 그리고 안전한 지역 개수에서 -1
        answer--;
      }
    }
  }

  // 모든 지역이 지뢰가 있는 지역이면 0 반환
  if (answer === 0) return 0;

  // 위험지역 확인
  point.forEach((w) => {
    // 위, 아래, 좌, 우, 대각선 총 8곳의 위치 확인
    for (let k = 0; k < 8; k++) {
      const nx = w[0] + dx[k];
      const ny = w[1] + dy[k];

      // 만약 nx ny의 위치가 board의 안쪽이고
      // 이미 확인한 위험지역이나 지뢰가 있는 지역이 아니라면
      if (nx >= 0 && ny >= 0 && nx < n && ny < n && board[nx][ny] === 0) {
        // 현재 위치를 위험지역으로 설정하고
        board[nx][ny] = 1;
        // 안전한 지역 개수에서 -1
        answer--;
      }
    }
  });

  return answer;
}