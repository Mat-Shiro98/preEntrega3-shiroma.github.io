/*

let num1, num2, resultado;

num1 = 2;
num2 = 6;
resultado = num1+num2;

console.log("Resultados de num1 + num2 = "+resultado);

*/

/*

let user,pass;

user = "Zhyro";
pass = "1234";

if (user === "Zhyro" && pass === "1234"){
    console.log("Bienvenido a JS " + user)
}else{
    console.log("Usuario desconocido")
}

*/

/*
function juego(name,level){
    console.log("Usuario: " +name +" / Nivel de poder: "+ level);
}

juego("Pepe","34");
*/

/*
console.log("Dispara al ladron con el numero 1:")

function disparar(boton){
    if(boton === 1){
        console.log("Disparaste al ladron")
    }else{
        console.log("No disparaste, el ladron se escapo")
    }
}

disparar(0);
disparar(1);

*/


/*
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log('¡Despegue 🚀!')
    } else {
        console.log('Faltan ' + i + ' segundos')
    }
}

for (let number = 1; number <= 10; number++) {
    console.log(number)
}


for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        const resultado = i * j
        console.log(i + ' x ' + j + ' = ' + resultado)
    }
}

*/

/*
const dia = "feriado"

switch (dia) {
    case "lunes":
        console.log("¡Hoy es lunes! 😢")
        break

    default:
        console.log("No es lunes, YAY! 🚀")
        break
}
*/

/*

const dia = new Date().getDay()

// segun el dia de la semana, mostramos un mensaje diferente
switch (dia) {
    case 0:
        console.log("¡Hoy es domingo! 😴")
        break
    case 1:
        console.log("¡Nooo, es lunes! 😢")
        break
    case 2:
        console.log("¡Hoy es martes! 🥵")
        break
    case 3:
        console.log("¡Hoy es miércoles! 🤓")
        break
    default:
        console.log("Se acerca el fin de! 🚀")
        break
}

*/
/*
function contador(a) {

    for (let i = a; i >= 0; i--) {
        if (i === 0) {
            console.log('¡Despegue 🚀!')
        } else {
            console.log('Faltan ' + i + ' segundos')
        }
    }

}
contador(50);

*/

/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */
/*
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        
        console.log(i +" FizzBuzz");
    } else if (i % 3 === 0) {
        
        console.log(i + " fizz");
    } else if (i % 5 === 0) {
        
        console.log(i+ " Buzz");
    }else{
        console.log(i);
    }
}
*/

/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

