import cipher from './cipher.js';


const output = document.getElementById("output");


document.getElementById("cifrar").addEventListener("click", (event) => {
    event.preventDefault();
    let offset = Number(document.getElementById('offset').value);
    let string = document.getElementById('string').value;
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