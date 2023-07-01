function fibonacci(n) {
    // base case
    if(n == 0 || n == 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const ans = fibonacci(8);
console.log(ans);