function findDisappearedNumber(num) {
  for (let i = 0; i < num.length; i++) {
    // Making sure the number is positive
    let currValue = Math.abs(num[i]);

    if (num[currValue - 1] > 0) {
      num[currValue - 1] *= -1; // making value negative
    }
  }

  let result = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] > 0) {
      // if the value is positive, means i + 1 the index is the missing value
      result.push(i + 1); // pushing the value in the array from last
    }
  }

  return result; // returning the result array;
}

const arr = [4, 3, 2, 7, 8, 3, 2, 1];
console.log(findDisappearedNumber(arr));
