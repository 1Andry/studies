"use strix"
const money = [ "usd 2", "eur 4", "usd 8", "eur 4", "rub 50",]
const getTotalMoney = (money, name) => {
    let result = 0;
    for(let i = 0; i < money.length; i++) {
        let currency = money[i].split(" ")
        if(currency[0] === name)
        result += Number (currency[1]);
    }
    return result;
};
console.log(getTotalMoney (money, "eur"));
