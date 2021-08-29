const sumIndwxNum = num => {
    num = (num).toString();
    let i = 0
    let result = 0;
    while (i < num.length){
    result += Number(num[i])
    i++;
    }
    if (result>9){
        return sumIndwxNum(result)
    }
    else return result;
};

console.log(sumIndwxNum (13));


