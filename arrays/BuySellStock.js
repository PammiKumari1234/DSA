//  Best time to buy and sell stock 

let prices=[1,100,3,6,7,10];
function Stock(prices){
    let min=prices[0];
    let maxProfit=0;
    for(let i=1;i<prices.length;i++){
        if(prices[i]-min>maxProfit){
            maxProfit=prices[i]-min;
        }
        if(prices[i]<min){
            min=prices[i];
        }
    }
    return maxProfit;
}
console.log(Stock(prices));

//TC- O(n)
//SC- O(1)