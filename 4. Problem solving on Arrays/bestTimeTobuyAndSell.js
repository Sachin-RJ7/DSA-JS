
var maxProfit = function(prices) {
    let minPrice = prices[0]; // Set the initial minimum price to the price on the first day
    let maxProfit = 0; // Initialize the maximum profit as zero
  
    for (let i = 1; i < prices.length; i++) {
      // Check if the current price is higher than the minimum price
      if (prices[i] > minPrice) {
        // Calculate the potential profit from selling at the current price
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
      }
  
      // Check if the current price is lower than the minimum price
      if (prices[i] < minPrice) {
        // Update the minimum price to the current price as it is a better buying opportunity
        minPrice = prices[i];
      }
    }
  
    return maxProfit; // Return the maximum profit achievable
  }
  const prices = [7, 1, 5, 3, 6, 9];
  const result = maxProfit(prices);
  console.log(result);