const divisionChek = num => {
    for (i = 1; i <= num; i++){
        if( num === Math.pow(3,i)) {
            return "true "  
            
        } else {
            // return "false"  //если раскоментировать цикл не выполняется, всегда возвращает "false", не могу понять почему
        }      
    }  
};
console.log(divisionChek(27));