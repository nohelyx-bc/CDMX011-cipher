import cipher from './cipher.js';


const output = document.getElementById("output"); //se decalara output como global ya que se usará continuamente


document.getElementById("cifrar").addEventListener("click", (event) => {
    //el .addEventListener nos permite añadir un evento en el Id seleccionado, en este caso con el click
    event.preventDefault(); //esto previene la función boton por default y así no se nos actualice la pag.
    let offset = Number(document.getElementById('offset').value);
    if (offset == "") {
        alert("¡No olvides introducir el valor de tu desplazamiento!")
    }
    let string = document.getElementById('string').value;
    if (string == "") {
        alert("¡No olvides introducir tu mensaje!")
    }
    let result = cipher.encode(offset, string);
    output.innerHTML = result; //imprime el resultado de la función cipher en este caso encode
});


document.getElementById("descifrar").addEventListener("click", (event) => {
    event.preventDefault();
    //se repite la estructura de input y output hecha en encode
    let offset = Number(document.getElementById('offset').value);
    if (offset == "") {
        alert("¡No olvides introducir el valor de tu desplazamiento!")
    }
    let string = document.getElementById('string').value;
    if (string == "") {
        alert("¡No olvides introducir tu mensaje!")
    }
    let result = cipher.decode(offset, string);
    output.innerHTML = result; //resultado decode
});


document.getElementById("copiar").addEventListener("click", (event) => {
    event.preventDefault();
    output.select(); //selecciona el texto ubicado en el output
    output.setSelectionRange(0, 999999); //le da el rango al que puede seleccionar texto
    document.execCommand("copy"); //genera la interacción con el portapapeles
});