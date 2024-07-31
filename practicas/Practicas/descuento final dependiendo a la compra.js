//descuento final dependiendo a la compra 
function calcularPrecioFinal(precioInicial) {
    let descuento;
    let tasaImpuesto = 0.16; // Ejemplo de impuesto del 16%

    
    if (precioInicial >= 0 && precioInicial <= 500) {
        descuento = 0;
    } else if (precioInicial >= 600 && precioInicial <= 999) {
        descuento = 0.05;
    } else if (precioInicial >= 1000 && precioInicial <= 1500) {
        descuento = 0.10;
    } else if (precioInicial > 2000) {
        descuento = 0.15;
    } else {
        console.log("Precio no válido");
        return;
    }

    
    let montoDescuento = precioInicial * descuento;
    let precioConDescuento = precioInicial - montoDescuento;

   
    let impuestos = precioConDescuento * tasaImpuesto;
    let precioFinal = precioConDescuento + impuestos;

    return {
        precioInicial: precioInicial.toFixed(2),
        montoDescuento: montoDescuento.toFixed(2),
        precioConDescuento: precioConDescuento.toFixed(2),
        impuestos: impuestos.toFixed(2),
        precioFinal: precioFinal.toFixed(2)
    };
}


let precioInicial = 1200; // Precio en la moneda deseada
let resultado = calcularPrecioFinal(precioInicial);

console.log('Precio inicial: ' + resultado.precioInicial);
console.log('Monto de descuento: ' + resultado.montoDescuento);
console.log('Precio con descuento: ' + resultado.precioConDescuento);
console.log('Impuestos: ' + resultado.impuestos);
console.log('Precio final: ' + resultado.precioFinal);