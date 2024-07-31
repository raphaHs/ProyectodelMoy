//Dias de la Semana
//Dias de la semana 
function DiasdelaSemana(dia){
    if (dia == 1){
        return "lunes"; 
    }else if (dia === 2){
        return "martes";
    }else if (dia === 3){
        return "miércoles";
    }else if (dia === 4){
        return "jueves";
    }else if(dia === 5){
        return "viernes";
    }else if (dia === 6){
        return "sábado";
    }else if(dia === 7){

    }else{
        return "numero invalido. favor de introducir un numero del 1 al 7. ";

    }
}

for ( let i = 1; i <= 7; i ++) {
      console.log('${i} -> ${DiasdelaSemana(i)}');

}
console.log(DiasdelaSemana(8));