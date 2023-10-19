/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   var devolver = "Henry"
   return devolver
}
var resultado1 = devolverString("string")
console.log(resultado1)

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var resultado2 = x + y;
   return resultado2;
}
var operacion2 = suma(10, 40);
console.log(operacion2);


function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var resultado3 = x - y;
   return resultado3;
}
var operacion3 = resta(20, 10);
console.log(operacion3);


function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   var resultado4 = x / y;
   return resultado4;
}
var operacion4 = divide(50, 5);
console.log(operacion4);



function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   var resultado5 = x * y;
   return resultado5;
}
var operacion5 = multiplica(5, 4);
console.log(operacion5);


function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   var resultado6 = x % y;
   return resultado6;
}
var operacion6 = obtenerResto(30, 3);
console.log(operacion6);


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
