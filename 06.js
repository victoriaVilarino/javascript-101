/*1. Juan y Pedro son hermanos. La semana pasada tuvieron una prueba en el colegio y hoy la profesora les dio la nota. Escribir un programa que:
    1. Declare y asigne 2 variables de tipo número: una con la nota de Juan (`10`) y otra con la nota de Pedro (`8`). Nombrá a las variables como más te guste.
    1. Mostrar por la terminal el valor más grande de los 2.
    1. Considerá el caso de que pueden ser iguales 🙊. Si eso ocurre, mostrar el mensaje: `'Ambos hijos tuvieron la misma nota'`.

    Casos que te pueden ayudar para probar:

    1. Si Juan se saca un `4` y Pedro un `6`. Mostrar `6`.
    1. Si Juan se saca un `9` y Pedro un `8`. Mostrar `9`.
    1. Si ambos se sacan un `7`, mostrar `'Ambos hijos tuvieron la misma nota'`.*/

var juanN=10;
var pedroN=8;

if (juanN>pedroN){
	console.log ("la nota de juan es mayor a la de pedro");
} else if (juanN<pedroN){
	console.log ("la nota de pedro es mayor a la de juan");
} 
else {
	console.log("Ambos hijos obtuvieron la misma nota");
}


var juanN=4;
var pedroN=6;

if (juanN>pedroN){
	console.log ("la nota de juan es mayor a la de pedro es un:"+juanN+ "y pedro se sacó un:"+ pedroN);
}else if(juanN<pedroN){
	console.log ("la nota de pedro es mayor a la de juan es un:"+pedroN+ "y juan se sacó un:"+juanN);
} 
else {
	console.log("Ambos hijos obtuvieron la misma nota");
}

var juanN=9;
var pedroN=8;

if (juanN>pedroN){
	console.log ("la nota de juan es mayor a la de pedro es un:"+juanN+ "y pedro se sacó un:"+pedroN);
}else if(juanN<pedroN){
	console.log ("la nota de pedro es mayor a la de juan es un:"+pedroN+ "y juan se sacó:"+juanN);
} 
else {
	console.log("Ambos hijos obtuvieron la misma nota");
}


var juanN=7;
var pedroN=7;

if (juanN>pedroN){
	console.log ("la nota de juan es mayor a la de pedro es un:"+juanN+"y pedro se sacó un:"+pedroN);
}else if(juanN<pedroN){
	console.log ("la nota de pedro es mayor a la de juan es un:"+pedroN+"y juan se sacó un:"+juanN);
} 
else {
	console.log("Ambos hijos obtuvieron la misma nota que es un:"+juanN);
}


/* Una farmacia hace el 15% de descuento a sus clientes si la compra es mayor a 100 pesos. Escribir un programa que dado el monto de una compra como valor numérico, diga cuanto debe abonar el cliente aplicando el descuento si es necesario.

    > Tip: Para obtener el porcentaje de un número podés usar la siguiente fórmula: `número * descuento / 100` (La famosa regla de 3 simple 😮).

    Si el monto de compra es de 500 pesos, ¿cuánto debe pagar el cliente?

    Casos que te pueden ayudar para probar:

    1. Si el monto de la compra es `55`. Mostrar `55` (Es menor a 100, por lo que no se aplica descuento).
    1. Si el monto de la compra es 200. Mostrar `170`, equivalente a `200 - descuento`. Para calcular el descuento ya te dí una pista 😉.
*/

var pago=200;
var descuento= (pago*15/100);

if (pago<100){
	console.log("no aplica descuento");
} else{
	console.log("tiene un descuento de:"+ descuento + "pesos y tiene que pagar un total de:"+ (pago-descuento));
}