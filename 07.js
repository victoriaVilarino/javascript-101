/*1. Dado el siguiente array de meses del año:

    ```javascript
    var meses = [
        'Enero', // índice `0`
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'  // índice 11, equivalente a `meses.length - 1`
    ];
    ```

    Escribir un programa que:

    1. Declare y asigne una variable que tenga como valor el **_número_** del mes de tu cumpleaños.
    1. Muestre por terminal el **_nombre_** del mes de tu cumpleaños. */

    var mes= [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

var mesc= 9;

var mescu= mes[mesc-1];

console.log ("el mes de mi cumpleaños es el: "+mesc+" osea seria en "+mescu);

/*

1. Dado los siguientes arrays:

    ```javascript
    var meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];

    var planetas = [
        'Mercurio',
        'Venus',
        'Tierra',
        'Marte',
        'Saturno',
        'Jupiter',
        'Urano',
        'Neptuno',
        'Plutón'
    ];
    ```

    1. Mostrar por la terminal la cantidad de elementos que tiene cada uno.
    1. Mostrar por la terminal el último elemento de cada array (usando la propiedad `length` que tienen los arrays).
    1. Mostrar el cuarto planeta por pantalla (`Marte`).*/

      var meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];

    var planetas = [
        'Mercurio',
        'Venus',
        'Tierra',
        'Marte',
        'Saturno',
        'Jupiter',
        'Urano',
        'Neptuno',
        'Plutón'
    ];

    console.log ("hay: "+meses.length+" meses en el año y",planetas.length+" planetas en el universo");
console.log (meses.length-1);
console.log (planetas.length-1);
console.log(planetas[4-1]);

/*1. Dado el siguiente array de nombres:

    ```javascript
    var nombres = ['Sofía', 'Abril'];
    var apellidos = ['Rodriguez', 'López'];
    ```*/

    var nombres = ['Sofía', 'Abril'];
 var apellidos = ['Rodriguez', 'López'];
 var nombreCompleto= ["Abril", "Rodriguez"];

 console.log(nombres[0]+apellidos[0]);
 console.log(nombreCompleto);
