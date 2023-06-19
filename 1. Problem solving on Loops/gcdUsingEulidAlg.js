function gcdByEuclidMethod(a, b) {
  while (a != b) {
    if (a % b === 0) return b;
    let r = a % b;
    a = b;
    b = r;
  }

  return 1;
}

console.log(gcdByEuclidMethod(33, 30));
