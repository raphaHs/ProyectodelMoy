//descuento dependiendo a la compra
function calcularDescuento(cantidadArticulos, precioPorArticulo) {
    let descuento;

    if (cantidadArticulos >= 2 && cantidadArticulos <= 10) {
        descuento = 0.05;
    } else if (cantidadArticulos >= 11 && cantidadArticulos <= 20) {
        descuento = 0.10;
    } else if (cantidadArticulos > 20) {
        descuento = 0.15;
    } else {
        descuento = 0;
    }

    let totalSinDescuento = cantidadArticulos * precioPorArticulo;
    let descuentoAplicado = totalSinDescuento * descuento;
    let totalConDescuento = totalSinDescuento - descuentoAplicado;

    return {
        totalSinDescuento: totalSinDescuento.toFixed(2),
        descuentoAplicado: descuentoAplicado.toFixed(2),
        totalConDescuento: totalConDescuento.toFixed(2)
    };
}


let cantidadArticulos = 15;
let precioPorArticulo = 50; // Precio en la moneda deseada
let resultado = calcularDescuento(cantidadArticulos, precioPorArticulo);

console.log('Total sin descuento: ' + resultado.totalSinDescuento);
console.log('Descuento aplicado: ' + resultado.descuentoAplicado);
console.log('Total con descuento: ' + resultado.totalConDescuento);