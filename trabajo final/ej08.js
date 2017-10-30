/*1. Declarar un objeto con el nombre de `autor` con las siguientes propiedades y valores:

    ```javascript
    nombre: 'Soda Stereo'
    integrantes: [
        'Gustavo Cerati',
        'Zeta Bosio',
        'Charly Alberti'
    ]
    ```*/
var Autor={
nombre: "Soda Stereo",
integrantes:["Gustavo Cerati", "Zeta Bosio", "Charly Alberti"]
};

/*
1. Declarar un objeto con el nombre `cancion1` con las siguientes propiedades y valores:

    ```javascript
    nombre: 'En el septimo día'
    duracion: 345
    ```*/

var cancion1= {
	nombre: "En el septimo día",
	duracion: 345
};

/*1. Declarar un objeto con el nombre `cancion2` con las siguientes propiedades y valores:

    ```javascript
    nombre: 'Canción Animal'
    duracion: 260
    ```*/
var cancion2={
	nombre: 'Canción Animal',
    duracion: 260
};
/*
1. Declarar un objeto con el nombre `cancion3` con las siguientes propiedades y valores:

    ```javascript
    nombre: 'Té para 3'
    duracion: 180
    ```*/

var cancion3={
	 nombre: 'Té para 3',
    duracion: 180
};
 /*. Declarar un objeto con el nombre de `disco` con los siguientes atributos:

    ```javascript
    nombre: 'Canción Animal'
    autor: // (asignar la variable autor)
    canciones: // (asignar un array con las canciones creadas anteriormente)
    ```
*/

var disco={
	nombre: "Canción Animal",
	autor: Autor,
	canciones: [cancion1[0], cancion2[0],cancion3[0]]
};

/*1. Imprimir en pantalla los siguientes datos:

    ```bash
    Nombre del disco: Canción Animal
    Nombre del autor: Soda Stereo
    Integrantes: ['Gustavo Cerati', 'Zeta Bosio', 'Charly Alberti']
    Canciones: ['En el septimo día', 'Canción Animal', 'Té para 3']
    ```
*/
console.log("Nombre del disco: ", disco.nombre);
console.log(Autor);
console.log("Canciones: ", disco.canciones);