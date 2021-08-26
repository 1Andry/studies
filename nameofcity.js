const city = name =>{
    let i = 1;
    let count = " ";
    while (i < name.length+1){
    count = count + name[name.length -i] ;
    i++;
    }
    return count;
};
console.log(city("California"));

