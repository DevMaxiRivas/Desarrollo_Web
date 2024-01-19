// B) Los datos de cofia y de otros alumnos fueron recibidos y ya están almacenados,
// ahora hay que crear un sistema que muestre esa información y se pueda asignar
// cuando rinde.
// - La interfaz debe ser agradable y atractiva.
// - Debe contener todos los datos de manera estructurada.
// - EI profesor puede seleccionar en cual de las 2 semanas rinde el usuario,
// - Si el profesor confirma, los datos se deben actualizar y reemplazar el espacio
// de seleccion de semana por la semana seleccionada.

let alumnos = [{
    nombre : "Maxi Rivas",
    email : "maximilianorivas@gmail.com",
    materia : "Probabilidades"
},{
    nombre : "Karin Guerra",
    email : "Karin@gmail.com",
    materia : "Fisica"
},{
    nombre : "Jorge Ramirez",
    email : "ramirez@gmail.com",
    materia : "Calculo"
},{
    nombre : "Facundo Roberto",
    email : "robert@gmail.com",
    materia : "Informatica"
},{
    nombre : "Coffla",
    email : "cofla@gmail.com",
    materia : "Informatica"
}];

const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");

let htmlcode = "";
for(const alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    htmlcode += `
        <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
            </select>
        </div>
    `;
}
contenedor.innerHTML = htmlcode;

boton.addEventListener("click",() => {
    if(confirm("Realmente quieres confirmar las mesas?")){
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for(elemento in elementos){
            let semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    }

});