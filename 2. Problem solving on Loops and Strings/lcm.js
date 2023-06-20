function gcdByEuclidMethod(a, b) {
  while (a != b) {
    if (a % b === 0) return b;
    let r = a % b;
    a = b;
    b = r;
  }
  return 1;
}

function findLcm(a, b) {
  let G = gcdByEuclidMethod(a, b);
  return (a * b) / G;
}

console.log(findLcm(7, 3));
