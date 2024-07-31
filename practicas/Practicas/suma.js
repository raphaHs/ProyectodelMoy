//suma
// suma, resta, multipliacion y division

function calcular (oreaciones, numero1, numero2) {
    let resultado;
if (operacion == "suma "){
    resultado = numero1 + numero2;
}else if (operacion == "resta "){
    resultado = numero1 - numero2;
}else if (operacion == "multipliacion "){
    resultado = numero1 * numero2;
}else if (operacion == "Division"){
    if (numero2 !== 0){
      resultado = numero1 / numero2;
    }else {
        console.log("Error: Division por cero");
        return;
    }

}else{
    
    return "operacion no valida";
}
return 'el resultado de la ${operacion} es: ${resultado}';

} 

let operacion = " division "; 
let numero1 = 10; 
let numero2 = 2;
 
let resultado = calcular(operacion, numero1, numero2);

console.log (resultado);