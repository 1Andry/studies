const FizzBuzz = (begin,end)=>{
for (let i = begin; begin < end; i++) { 
    if (i%3===0 && i%5===0){
        console.log("FizzBuzz");
    }
    else if(i%5===0){
        console.log("Buzz");
    }
    else if(i%3===0){
        console.log("Fizz");
    }
    else if(i>end){
        break;
    }
    else{
        console.log(i);
    }
}
}
console.log(FizzBuzz(0,44))