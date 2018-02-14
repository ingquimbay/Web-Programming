console.log("Hello World");

window.onload = function () {
    var titulo = document.createElement("h1");
    var texto = document.createTextNode("hola mundo proWeb!");
    titulo.appendChild(texto);
    document.body.appendChild(titulo);
}
