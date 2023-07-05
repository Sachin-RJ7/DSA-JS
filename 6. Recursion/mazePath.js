function mazePath(i, j, m, n) {
  // If the current position is at the bottom-right corner of the maze return 1
  if (i === n - 1 && j === m - 1) return 1;

  // If the current position exceeds the boundaries of the maze, return 0
  if (i >= n || j >= m) return 0;

  // Recursively explore paths by moving right and down, and return the sum of the paths found
  return mazePath(i, j + 1, n, m) + mazePath(i + 1, j, n, m);
}

console.log(mazePath(0, 0, 3, 3));
