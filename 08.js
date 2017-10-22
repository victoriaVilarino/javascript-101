/* Un año de vida para las personas, representa 7 años en la vida de un perro. Escribí un programa que reciba como parámetro tu edad (no te olvides de usar la función `Number` para convertirla de string a número) y mostrá por la terminal cuantos años tendrías si fueras un perro (tu edad multiplicada por 7).
1. Escribí un programa que reciba el nombre de una persona (string) y la nota de su trabajo práctico (número). Mostrar por la terminal el mensaje adecuado dependiendo de las siguientes condiciones:

    * Si su nota es mayor a 7, mostrar:

    ```bash
    # Completar los 3 puntos con los datos correspondientes
    'El/La alumno/a llamado/a ... se sacó un ...'
    'Felicitaciones por aprobar'
    ```

    * Si su nota es mayor a 4 pero menor a 7, mostrar:

    ```bash
    # Completar los 3 puntos con los datos correspondientes
    'El/La alumno/a llamado/a ... se sacó un ...'
    'La próxima entrega espero un mejor trabajo'
    ```

    * Si su nota es menor a 4, mostrar:

    ```bash
    # Completar los 3 puntos con los datos correspondientes
    'El/La alumno/a llamado/a ... se sacó un ...'
    'Nos vemos en Marzo' */


 var persona=process.argv[2];
 var nota= process.argv[3];

if (nota>=7){
 console.log(" el alumno "+ persona + " se saco un "+ nota+ " de nota por lo que aprobó");
} else if (nota<4){
    console.log("el alumno "+ persona +" se saco un "+ nota+ " nos vemos en marzo");
}else {
    console.log("el alumno"+ persona+ " se saco un "+nota+ "desaprobo");
}
/*1. Un año de vida para las personas, representa 7 años en la vida de un perro. Escribí un programa que reciba como parámetro tu edad (no te olvides de usar la función `Number` para convertirla de string a número) y mostrá por la terminal cuantos años tendrías si fueras un perro (tu edad multiplicada por 7).*/

var edad= process.argv[2];

console.log ("si fueras un perro tendrías " edad*7 " años");