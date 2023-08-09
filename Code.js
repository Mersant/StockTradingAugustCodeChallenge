// Record time was 50ms (1) or beats 99.97%, Avg. across 10 runs was ~66ms or beats 95.48%
// (1) https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/1016997668/
var maxProfit = function(prices) {
    var highestProfit = 0,
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
