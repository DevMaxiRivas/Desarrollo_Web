const input = document.querySelector(".input-prueba");
const input2 = document.querySelector(".input-prueba2");
const contenedor = document.querySelector(".seleccionado");

// el script lo que hace es que a la hora de seleccionar
// dentro del input una subcadena de la cadena que ingreso
// la escribe en el documento html

input.addEventListener("select",(e)=>{
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoCompleto = input.value;

    contenedor.innerHTML = "El texto seleccionado es: <b>" + textoCompleto.substring(start,end) + "</b>";

});

// el script lo que hace es mostrar cual es la
// ultima tecla que se presiono y mostrarla

input2.addEventListener("keyup",(e)=>{
    let tecla = e.key;
    nvoContenido = `La ultima tecla presionada fue <b>${tecla}</b>`;
    contenedor.innerHTML = nvoContenido;

});
