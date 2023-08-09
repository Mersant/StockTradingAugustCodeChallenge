// Record was 50ms (1) or top 99.90%, Avg. across 10 runs was 69.2 or top ~93%
// (1) https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/1016993536/ (Comments on this run are outdated)
var maxProfit = function(prices) {
    var highestProfit = Math.abs(prices[1] > prices[0]), // Force profit to unsigned int so that 0 will be returned (no trades) if highest profit is negative
        stockBuyPrice = prices[0];

    for(var i = 1; i < prices.length; i++) {
        if(prices[i] < stockBuyPrice) {
            // If a lower buy price was found, "sell" stocks and buy today for a lower price
            stockBuyPrice = prices[i];
        } else {
            // If a lower buy price was not found, check potential profit if selling today
            const potentialProfit = prices[i] - stockBuyPrice;
            if(potentialProfit > highestProfit) {
                highestProfit = potentialProfit;
            }
        }
    }
    return highestProfit
};
