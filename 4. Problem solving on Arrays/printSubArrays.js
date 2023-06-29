function printSubArrays(nums) {
  for (let start = 0; start < nums.length; start++) {
    let str = "";
    for (let end = start; end < nums.length; end++) {
      str += nums[end] + " ";
      console.log(str);
    }
  }
}

const nums = [1, 2, 3, 4, 5];
printSubArrays(nums);
