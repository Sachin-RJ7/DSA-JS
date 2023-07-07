
function findMinNumCoins(coins, x) {
    // base case
    if( x === 0 ) return 0;

    let result = Infinity;

    for(let i = 0; i < coins.length; i++) {
        if( x - coins[i] < 0 ) continue;
        result = Math.min(result, findMinNumCoins(coins, x - coins[i]));
    }

    return 1 + result;
}

const coins = [9, 6, 5, 1];
const x = 11;

console.log(findMinNumCoins(coins, x));