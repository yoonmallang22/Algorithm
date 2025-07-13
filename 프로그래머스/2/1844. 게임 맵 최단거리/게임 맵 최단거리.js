function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const queue = [[0, 0, 1]];  // 시작 위치 (0,0), 거리 1

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  while (queue.length) {
    const [x, y, dist] = queue.shift();

    if (x === n - 1 && y === m - 1) return dist; // 도착

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 && ny >= 0 && nx < n && ny < m &&
        maps[nx][ny] === 1
      ) {
        maps[nx][ny] = 0;  // 방문 처리
        queue.push([nx, ny, dist + 1]);
      }
    }
  }

  return -1;
}