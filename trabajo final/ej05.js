/*1. Declarar una variable del tipo array, con el nombre `canciones` y que tenga los siguientes valores:

    ```bash
    'En la ciudad de la furia'
    'Trátame suavemente'
    'Nada Personal'
    'Signos'
    ```*/
 var canciones= ["En la cuidad de la furia","trátame suavemente","Nada Personal", "Signos"];

 /*Imprimir en consola el array `canciones`.*/

console.log(canciones);

 /* Impimir en la consola cada una de las canciones del array `canciones` utilizando índices numéricos.*/

console.log(canciones[0]);
console.log(canciones[1]);
console.log(canciones[2]);
console.log(canciones[3]);

/*1. Imprimir en la consola la cantidad de canciones que hay en el array:

    Formato esperado:

    ```bash
    Cantidad de canciones: 4
    ```
*/

console.log("Cantidad de canciones: ", canciones.length);