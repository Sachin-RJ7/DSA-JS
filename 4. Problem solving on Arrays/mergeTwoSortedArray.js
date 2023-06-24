function merge(arr1, m, arr2, n) {
  let i = 0; // iterate over arr1
  let j = 0; // iterate over arr2
  let k = 0; // starting index for putting values
  let result = Array(m + n); // new array of size arr1 + arr2

  while (i < m && j < n) {
    // this loop will run until the condition is satisfied
    if (arr1[i] < arr2[j]) {
      result[k] = arr1[i];
      k++;
      i++;
    } else {
      result[k] = arr2[j];
      k++;
      j++;
    }
  }

  // above condition is false, therefore here you came here
  while (i < m) {
    // putting all the remaining values in the arr1
    result[k] = arr1[i];
    k++;
    i++;
  }
  while (j < n) {
    // putting all the remaining values in the arr2
    result[k] = arr2[j];
    k++;
    j++;
  }

  for (let i = 0; i < result.length; i++) {
    arr1[i] = result[i]; // putting all the values in arr1 because the question demands
  }
}

const arr1 = [1, 2, 4, 5, 7];
const arr2 = [2, 3, 5, 5, 6, 8];
const m = arr1.length;
const n = arr2.length;

merge(arr1, m, arr2, n);

console.log(arr1);
