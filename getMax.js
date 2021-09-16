const getMax = num => {
    let result = 0
    for(let i = 0; i < num.length ; i++){
        if ( result < Number (num[i])) {
            result = num[i]   
        }
    }
    return result
};
console.log(getMax (["1", "10", "8", "-2", "-33"]));


