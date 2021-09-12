const divisionChek = num => {
    let searchNum = 0
    for (i = 1; i <= num; i++) { 
        searchNum = Math.pow(3,i)
        if( num === searchNum) {    
            return "true: "  + num + " число 3 в степени " + i
        }      
    } 
    return "false: " + num  + " не является числом в 3 степени"  
};
console.log(divisionChek(91));