
// this funciton will swap the array values
function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function reverseArray(arr) {
    let i = 0; // starting index
    let j = arr.length -1; // last index

    while( i <= j) { // this loop will run until i becomes greater than j
        swap(arr, i, j);
        i++; // increment in i  of 1;
        j--; // decrement in j of 1
    }
    return;
}

const arr = [5, 9, 1, 8, 2];
reverseArray(arr);
console.log(arr);