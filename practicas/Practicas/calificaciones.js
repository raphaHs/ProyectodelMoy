//calificaciones
function obtenerLetraCalificacion(calificacion) {
    let letra;

    if (calificacion >= 90 && calificacion <= 100) {
        letra = 'A';
    } else if (calificacion >= 80 && calificacion <= 89) {
        letra = 'B';
    } else if (calificacion >= 70 && calificacion <= 79) {
        letra = 'C';
    } else if (calificacion >= 60 && calificacion <= 69) {
        letra = 'D';
    } else if (calificacion >= 50 && calificacion <= 59) {
        letra = 'F';
    } else {
        letra = 'Calificación no válida';
    }

    return letra;
}

let calificacion = 85;
console.log('La letra de la calificación es: ' + obtenerLetraCalificacion(calificacion));
