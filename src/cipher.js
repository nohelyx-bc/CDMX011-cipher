//const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let desplazamiento = 4;
let mensaje = "MI MENSAJE SECRETO";

mensaje = mensaje.trim();


//se define la función para nuestro cipher
function encode(string, offset) {
    let valorAscii = mensaje.charCodeAt(i);

    //como las mayusculas se encuentran en un rango de 65 y 90 en valores ascii entonces para nuestra formula de cifrado
    if (valorAscii >= 65 && <= 90) {
        desplazo = (valorAscii - 65 + 3) % 26 + 65;
    }
}


export function encode(cipher) {
    console.log
}