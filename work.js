// const getColour = colour => {
//     if (colour === 'white') {
//         return 'white';
//     } else {
//         return 'black';
//     }
// };
// const getColour = (colour === 'white')? 'white':'black'
const result = (exam,projects)=>{
    if (exam > 90 || projects > 10){
        return 100;
    }
    else if (exam > 75 && projects > 5){
        return 90;    
    }
    else if (exam > 50 && projects > 2){
        return 90;  
    }
    else {
        return 0 ;
    }

}
console.log(result(55,55));