function fn(n) {
  // base case...
  if (n === 0) return;
  fn(n - 1);
  console.log(n);
}

fn(6);
