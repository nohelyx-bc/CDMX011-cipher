const cipher = {

    encode: function(offset, string) {
        string = string.trim(); //.trim sirve para eliminar cualquier espacio en blanco que tengamos a la izq o der 

        // en estas variables se guardarán el resultado la(s) letra(s) que se mostrarán y su valor en ascii
        let valorAscii = 0;
        let resultado = "";

        //se usa el for para recorrer nuestro string y así poder obtener la posición de nuestras letras en el alfabeto
        for (let i = 0; i < string.length; i++) {
            let mensaje_ascii = string.charCodeAt(i);

            //como los valores de las mayusculas en código ascii se encuentran entre 65 y 90 se usa la siguiente condición
            if ((mensaje_ascii >= 65) && (mensaje_ascii < 91)) {
                valorAscii = ((mensaje_ascii - 65 + offset) % 26) + 65;
            }

            //Se realiza el mismo procedimiento con las minúsculas que sus valores ascii están entre el 97 y 123, de manera que la condición usada:
            else if ((mensaje_ascii >= 97) && (mensaje_ascii < 123)) {
                valorAscii = ((mensaje_ascii - 97 + offset) % 26) + 97;
            }
            /* else if ((mensaje_ascii >= 33) && (mensaje_ascii <= 64)) {
                        valorAscii = ((mensaje_ascii - 33 + offset) % 26) + 33;
                       } */

            //como el valor de espacio es 32 entonces usamos modulo de 1, ya que no necesitamos desplazarlo
            //aunque no se necesite desplazarlo sí es necesario parametrizarlo, de manera que igual que con las condiciones anteriores
            else {
                valorAscii = ((mensaje_ascii) % 1) + 32;
            }

            let string_encode = String.fromCharCode(valorAscii);

            resultado += string_encode;

        }

        //console.log(resultado);

        return resultado;

    },



    decode: function(offset, string) {
        string = string.trim();
        let valorAscii = 0;
        let resultado = "";

        for (let i = 0; i < string.length; i++) {
            let mensaje_ascii = string.charCodeAt(i);

            if ((mensaje_ascii >= 65) && (mensaje_ascii < 91)) {
                valorAscii = ((mensaje_ascii + 65 - offset) % 26) + 65;
            }
            //para el desencriptado minusculas se tomó el limite final en vez del principio
            else if ((mensaje_ascii >= 97) && (mensaje_ascii < 123)) {
                valorAscii = ((mensaje_ascii - 122 - offset) % 26) + 122;
            }
            /* else if ((mensaje_ascii >= 33) && (mensaje_ascii <= 64)) {
                valorAscii = ((mensaje_ascii - 64 - offset) % 26) + 64;}*/
            else {
                valorAscii = ((mensaje_ascii) % 1) + 32;
            }

            let string_decode = String.fromCharCode(valorAscii);

            resultado += string_decode;
        }

        return resultado;

    }

};

export default cipher;