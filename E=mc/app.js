// добавляем событие по клику кнопки и добавляем функцию myClick
document.querySelector("button").onclick=myClick;
function myClick(){
    // получаем данные (m)
    let m = document.querySelector(".m").value; 
    // вводим формулу и постоянные данные
    const c = "300000000";
    const E = c*m
    console.log(E);
    document.getElementById("out").innerHTML = E;
}





    