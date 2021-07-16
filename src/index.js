import cipher from './cipher.js';

const output = document.getElementById("output");
const container = document.getElementById("container");
const items = document.getElementById("items");


document.getElementById("cifrar").addEventListener("click", (event) => {
    event.preventDefault();
    cipher.offset = Number(document.getElementById('offset').value);
    cipher.string = document.getElementById('string').value;
    cipher.encode(cipher.offset, cipher.string);
    output.innerHTML += cipher.encode(cipher.offset, cipher.string);
});


document.getElementById("descifrar").addEventListener("click", (event) => {
    event.preventDefault();
    cipher.offset = Number(document.getElementById('offset').value);
    cipher.string = document.getElementById('string').value;
    cipher.decode(cipher.offset, cipher.string);
    output.innerHTML += cipher.decode(cipher.offset, cipher.string);
});


document.getElementById("copiar").addEventListener("click", (event) => {
    event.preventDefault();
    output.select();
    output.setSelectionRange(0, 999999);
    document.execCommand("copy");
});

/*
document.getElementById("limpiar").addEventListener("click", (event) => {
    event.preventDefault();
    let offset = document.getElementById("offset").value = "";
    let string = document.getElementById("string").value = "";
    let output = document.getElementById("output").innerHTML = "";
}); */

document.getElementById("cambiarPantalla").addEventListener("click", (event) => {
    event.preventDefault();
    container.style.display = "none";
    items.style.display = "inline";
});