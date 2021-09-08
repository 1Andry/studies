const divisionChek = num => {
    for (i = 0; i <= num; i++){
        if( num === Math.pow(3,i) ){
            console.log(i)
        return true     
        }      
        else {
            false
        } 
        
    }  
};
console.log(divisionChek(8));