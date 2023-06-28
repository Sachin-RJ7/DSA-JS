function singleNumber(nums){
    let result = 0;
    for(let i = 0; i < nums.length; i++){
        result = result ^ nums[i];
    }
    return result;
}

const arr = [1, 2, 1, 2, 4, 3, 5, 3, 5];
console.log(singleNumber(arr));