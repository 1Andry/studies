const numMinAndMax = (num1, num2, num3 )=>{
    const maxNum = (num1>num2 && num1>num3) ? num1 : (num2>num1 && num2>num3) ? num2 : num3; 
    console.log( "наибольшее число")
console.log(maxNum)
const minNumm = (num1<num2 && num1<num3) ? num1 : (num2<num1 && num2<num3) ? num2 : num3; 
    console.log( "наименьшее число")
console.log(minNumm)
};  
console.log(numMinAndMax(111,23,434));

    



