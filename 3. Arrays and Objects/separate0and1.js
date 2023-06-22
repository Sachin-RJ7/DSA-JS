

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
 
/*
 beginner approach...
function ascendingOrder(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i !== j) {
      if (arr[i] === 1) {
        if (arr[j] === 0) {
          swap(arr, i, j);
          i++;
          j--;
        }
        else {
            j--;
        }
      } else {
        i++;
      }
    }
  }
  */

  
  // Optimized approach
  function separate(arr) {
    let i = 0;
    let j = arr.length - 1;

    while( i <= j ) { // till the time i and j have not passed each other
        if(arr[i] === 1){ // we just check if we have 1 at index i, does not matter what have at index j
            swap(arr, i, j);
            j--;
        }else {
            i++;
        }
    }
  }

  let arr = [0, 1, 0, 1, 1, 0, 1, 1, 0, 0];
  separate(arr); // transfrom the original array
  console.log(arr);