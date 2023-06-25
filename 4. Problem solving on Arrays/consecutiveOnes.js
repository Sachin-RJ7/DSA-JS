function findMaxConsecutiveOnes(nums) {
  let finalAns = 0;
  let consecutiveOnes = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      consecutiveOnes += 1;
    } else {
      finalAns = Math.max(finalAns, consecutiveOnes);
      consecutiveOnes = 0; // restarting the count
    }
  }
  return Math.max(finalAns, consecutiveOnes);
}

const arr = [1, 1, 0, 1, 1, 1];
const result = findMaxConsecutiveOnes(arr);
console.log(result);
