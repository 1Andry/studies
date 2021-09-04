// Выведите простые числа от 2 до 1000. Простое число - это число, которое делится только на себя и на 1. Пример простых чисел: 3, 5, 7, 11, 13, 17.
const simpleNumber = num => {
    let result = " "
    pointReturn:
    for (let i = 2; i <= num; i++) {
        for(let j = 2; j < i; j++){
            if (i % j === 0) {
            continue pointReturn;
            }
        }   
        result +=" " + i
       
    }
    return result     
}   
console.log(simpleNumber(230))
