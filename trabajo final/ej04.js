/*1. Declarar una variable del tipo objeto, con el nombre de `cancion` y que tenga las siguientes propiedades:

    ```javascript
    nombre: 'En la ciudad de la furia'
    autor: 'Soda Stereo'
    duracion: 345
    reproducir: false
    favorita: true
    ```*/

    var cancion={
     nombre: 'En la ciudad de la furia',
    autor: 'Soda Stereo',
    duracion: 345,
    reproducir: false,
    favorita: true,
};

console.log(cancion);

/*1. Agregar una nueva propiedad al objeto `cancion` de forma dinámica que se llame `album` y asignar el siguiente valor:

    ```bash
    'Me Verás Volver (Hits & Más)'
    ```*/

      var cancion={
     nombre: 'En la ciudad de la furia',
    autor: 'Soda Stereo',
    duracion: 345,
    reproducir: false,
    favorita: true,
    Album: "Me Verás Volver (Hits & Más)",
};  
/*1. Imprimir todas las propiedades del objeto `cancion` nuevamente.*/
console.log (cancion);

/*1. Imprimir el valor de la propiedad `album` del objeto `cancion`.

    ```bash
    Album: Me Verás Volver (Hits & Más)
    ```
*/

console.log(cancion.Album);
