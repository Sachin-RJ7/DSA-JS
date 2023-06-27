function countSum(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let count = 0;

  while (start < end) {
    if (arr[start] + arr[end] > target) {
      // decrease the sum
      end--;
    } else if (arr[start] + arr[end] < target) {
      // increase the sum
      start++;
    } else {
      // equal to the target
      if (arr[start] === arr[end]) {
        let freq = end - start + 1;
        count += Math.floor((freq * (freq - 1)) / 2);
        return count;
      }

      let x = 0;
      let a_s = arr[start];
      while (arr[start] === a_s) {
        start++;
        x++;
      }

      let y = 0;
      let a_e = arr[end];
      while (arr[end] === a_e) {
        end--;
        y++;
      }

      count += x * y;
    }
  }

  return count;
}

let arr = [1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 6];
let target = 8;
console.log(countSum(arr, target));
