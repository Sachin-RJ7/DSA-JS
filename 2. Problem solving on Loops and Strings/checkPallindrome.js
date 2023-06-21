function checkPallindrome(num) {
  // convert the num to a string
  let str = "" + num;
  let i = 0;
  let j = str.length - 1;

  while (i <= j) {
    if (str[i] === str[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  // if we complete the loop and never find the mismatch, it means it's a pallindrome..
  return true;
}

console.log(checkPallindrome(1331));
