// String (cadena de carcteres)

let str_1 = "Hola soy un texto con comillas";
let str_2 = 'Hola soy un texto con comillas';
let str_3 = "Comillas \"debtro\" de comillas";
let str_4 = 'Comillas "dentro" de comillas';
let str_5 = "Comillas 'dentro' de comillas";

console.log(str_1);
console.log(str_2);
console.log(str_3);
console.log(str_4);
console.log(str_5);

// comillas `` (backticks)

let str_6 = `Comillas invertidas Backticks`;
console.log(str_6);

let nombre = "Roberto";
let saludo = `Hola, $´{nombre} Bienvenido`

console.log(saludo);

//html
let platilla_html= `
<html>
<h1>pagina web${nombre} </h1>
</html>`

console.log(platilla_html);
