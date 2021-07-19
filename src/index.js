import cipher from './cipher.js';


const output = document.getElementById("output");


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
    output.innerHTML = result;
});


document.getElementById("descifrar").addEventListener("click", (event) => {
    event.preventDefault();
    let offset = Number(document.getElementById('offset').value);
    let string = document.getElementById('string').value;
    let result = cipher.decode(offset, string);
    output.innerHTML = result;
});


document.getElementById("copiar").addEventListener("click", (event) => {
    event.preventDefault();
    output.select();
    output.setSelectionRange(0, 999999);
    document.execCommand("copy");
});