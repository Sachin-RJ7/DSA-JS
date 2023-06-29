const majorityElement = (nums) => {
  if (nums.length === 1) {
    return nums[0];
  }

  let potential_majorityElement = -1;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      potential_majorityElement = nums[i];
    }
    if (potential_majorityElement === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  return potential_majorityElement;
};

const nums = [3, 2, 3, 2, 3];
console.log(majorityElement(nums));
