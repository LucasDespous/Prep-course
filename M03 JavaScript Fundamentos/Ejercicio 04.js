/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   var operacion1 = num ** 2;
   return operacion1;
}
var resultado1 = elevarAlCuadrado(4);
console.log(resultado1);

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   var operacion2 = num ** 3;
   return operacion2;
}
var resultado2 = elevarAlCubo(3);
console.log(resultado2);


function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   var operacion3 = num ** exponent;
   return operacion3;
}
var resultado3 = elevar(4, 4);
console.log(resultado3);


function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   var operacion4 = Math.round(num);
   return operacion4
}
var resultado4 = redondearNumero(4.50);
console.log(resultado4);

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   var operacion5 = Math.ceil(num);
   return operacion5;
}
var resultado5 = redondearHaciaArriba(2.30);
console.log(resultado5);

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   var operacion6 = Math.random();
   return operacion6;
}
var resultado6 = numeroRandom();
console.log(resultado6);


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
