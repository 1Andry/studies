const randomNum = (num1, num2, num3)=>{
if(num1 == num2 == num3){
    console.log("числа равны");
}
else if(num1>num2 && num1>num3){
    console.log("наибольшее число:" + num1 );
}
else if (num2>num1 && num2>num3){
    console.log("наибольшее число:" + num2 );
}
else {
    console.log("наибольшее число:" + num3 );
}
if(num1 == num2 == num3){
    console.log("числа равны" );
}
else if(num1<num2 && num1<num3){
    console.log("наименьше число:" + num1 );
}
else if (num2<num1 && num2<num3){
    console.log("наименьше  число:" + num2 );
}
else {
    console.log("наименьше  число:" + num3 );
}  
};
console.log(randomNum(16, 1, 1));