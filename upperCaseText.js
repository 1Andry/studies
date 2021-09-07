
const text = ["hello", "big", "world"];
for(let i = 0; i < text.length; i++){
    const newText = text[i][0].toUpperCase() + text[i].slice(1)
    //            = обращаемся к массиву к первой букве первого  значения и переводим ее в верхний регистр
    //            + добавляем оставшиеся буквы кроме первой "начиная с 1-го индекса"   
    console.log( newText )
};
