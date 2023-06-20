function fibonacci(x) {
  if (x === 0) {
    console.log(0);
    return;
  }

  if (x >= 1) {
    console.log(0);
    console.log(1);
  }

  let secondLast = 0;
  let last = 1;

  for (let i = 2; i <= x; i++) {
    let result = secondLast + last;
    console.log(result);
    secondLast = last;
    last = result;
  }
}

fibonacci(13);
