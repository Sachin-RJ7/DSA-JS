// Using two pointer approach...
function twoSum(nums, target) {
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
}

/*

// Optimised approach : Using map()
function twoSum(nums, target) {
    let mp = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        
        if (mp.has(diff)) {
            return [i, mp.get(diff)]
        }
        
        mp.set(nums[i], i)
    }
};

*/

const nums = [2,7,11,15];
const target = 9;
console.log(twoSum(nums,target));