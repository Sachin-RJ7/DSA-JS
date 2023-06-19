function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    let lastDigit = num % 10; // 4136 % 10 -> 6 ( last digit)
    sum += lastDigit;
    num = Math.floor(num / 10); // 4136 / 10 -> 413.6 -> Math.floor(413.6) = 413
  }
  return sum;
}

const ans = sumOfDigits(356673);
console.log(ans);
