
function factorial(n) {
    // base case
    if(n == 1) return 1;
    return n * factorial(n - 1);
}
const ans = factorial(5);
console.log(ans);