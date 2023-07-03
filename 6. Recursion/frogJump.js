function fn(i, n, heights) {
    if(i === n) return 0;
    if(i === n - 1) {
        return Math.abs(heights[i] - heights[i + 1]) + fn(i + 1, n, heights);
    }

    if(n > 1) return Infinity;

    return Math.min(
        Math.abs(heights[i] - heights[i + 1]) + fn(i + 1, n, heights),
        Math.abs(heights[i] - heights[i + 2])+ fn(i + 2, n, heights),
    )
}

const heights = [undefined, 10, 10]; // undefined is dummy value for making array 1 based index...
const startingPoint = 1;
const noOfStones = heights.length ;

console.log(fn(startingPoint, 2, heights));