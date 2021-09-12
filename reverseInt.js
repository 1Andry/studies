const reversInt = num => { 
    num = String(num);
    let result = " ";
    let a = String(num[0]);
    let b = "-";
    if (a === b) {
        for(let i = num.length -1; i > 0; i--){
            result += num[i]
        }    
        return `${a}${result}` 
    }  else {
        for(let i = num.length -1; i >= 0; i--){
            result += num [i]
        }
        return result
    }      
};
console.log(reversInt(-123));