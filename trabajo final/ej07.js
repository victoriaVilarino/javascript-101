/*1. Declarar un array con el nombre `canciones` con los siguientes valores.

    ```javascript
    {
        nombre: 'En la ciudad de la furia',
        duracion: 345
    }

    {
        nombre: 'Nada Personal',
        duracion: 300
    }
    ```*/

var canciones= [{nombre:"En la cuidad de la furia", duracion:345}, {nombre:"Nada Personal", duracion:300}];

/*1. Imprimir en la consola todos los valores del array `canciones`.*/

console.log(canciones);

/*1. Imprimir en consola el primer objeto del array `canciones`.*/

console.log(canciones[0]);

///1. Imprimir en consola el segundo objeto del array `canciones`.

console.log(canciones[1]);
/*1. Imprimir en consola las propiedades del primer objeto del array canciones con el siguiente formato:

    ```bash
    Canción: En la ciudad de la furia
    Duración en segundos: 345
    ```*/

console.log("Canción: ",canciones[0].nombre);
console.log("Duración en segundos: ",canciones[0].duracion);

/*1. Imprimir en consola las propiedades del primer objeto del array canciones con el siguiente formato:

    ```bash
    Canción: En la ciudad de la furia
    Duración en segundos: 345
    ```*/

console.log("Canción: ",canciones[1].nombre);
console.log("Duración en segundos: ",canciones[1].duracion);