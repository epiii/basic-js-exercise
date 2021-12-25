// question : get the max profit from gold selling from day 1 till 10, (left : price of buy & right price of sell)
// hint 
// for i =0 -> length
// for j = i+ 1 -> length
// output = max(output, data[j] - data[i])

function getMaxProfit(data) {
    let result = {}
    let tempProfit = 0

    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            let profit = data[j] - data[i]
            if (profit > tempProfit) {
                tempProfit = profit
                let obj = {
                    'buyDay': i + 1,
                    'sellDay': j + 1,
                    'buyPrice': data[i],
                    'sellPrice': data[j],
                    'profit': profit,
                };
                result = obj
            }
        }
    }
    return result
}


function getMaxProfitSingle(data) {
    let tempData = []
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if (data[i] < data[j]) {
                tempData.push(data[j] - data[i])
            }
        }
    }
    return Math.max(...tempData)
}

// test
let dataHarga = [10, 20, 5, 80, 90, 3, 8, 6, 22, 11]
console.log('my solution :')
console.table(getMaxProfit(dataHarga)) // my solution

console.log('intrvwer solution :')
console.log(getMaxProfitSingle(dataHarga)) // intvw solution

// output

// my solution :
// ┌───────────┬────────┐
// │  (index)  │ Values │
// ├───────────┼────────┤
// │  buyDay   │   3    │
// │  sellDay  │   5    │
// │ buyPrice  │   5    │
// │ sellPrice │   90   │
// │  profit   │   85   │
// └───────────┴────────┘
// intrvwer solution :
// 85
