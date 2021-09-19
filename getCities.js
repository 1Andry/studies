"use strix"
const cities = ['moscow', 'london', 'berlin', 'porto'];
const get = (cities, index, name ) => {
    index = cities[index];
    const result = [];
    if(name){
        return name;
    } else  {
        for (const item of cities) {
            if(item ===  index ){   
            result.push(item);   
        } 
    } 
    } 
    let out =  result != 0 ? result : null;
    return out;
};
console.log(get (cities, 2, "moroco"));