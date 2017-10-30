/*1. Crear un nuevo archivo llamado `ej06.js`.

1. Declarar una variable del tipo array con el nombre `cancion` con los siguientes valores.

    ```bash
    'En la ciudad de la furia'
    'Soda Stereo'
    345
    false
    true
    ```*/

var cancion=["En la cudiad de la furia","Soda Stereo", 345, false,true];


//1. Imprimir en la consola todos los valores del array `cancion`.

console.log(cancion);

/*1. Imprimir todos los valores del array `cancion` con el siguiente formato:

    ```bash
    Canción: En la ciudad de la furia
    Autor: Soda Stereo
    Duración en segundos: 345
    Reproducir: false
    Canción favorita: true
    ```
*/

console.log("Canción: ",cancion[0]);
console.log("Autor: ",cancion[1]);
console.log("Duración en seugndos: ",cancion[2]);
console.log("Reproducir: ", cancion[3]);
console.log("Canción favorita:",cancion[4]);