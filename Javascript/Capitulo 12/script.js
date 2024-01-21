// A) Cofia esta en su último año y necesita recuperar todas sus notas para que le puedan decir 
// si efectiva•ente pasó al último semestre, de ser así...
// cofia ya estaría a un solo paso ordenado de finalizar su carrera coao ingeniero! peeero,
// hay un estas notas estan almacenadas en otro servidor.
// - Crear un que almacene toda la información de las materias y las muestre en pantalla de
// manera ordenada

const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre : "Fisica 4",
        nota : "8"
    },{
        nombre : "Calculo 3",
        nota : "8"
    },{
        nombre : "Base de Datos 3",
        nota : "9"
    },{
        nombre : "Matematica Discreta 2",
        nota : "8"
    },{
        nombre : "Programacion 4",
        nota : "7"
    }
];

const obtenerMateria = (id) => {
    return new Promise((resolve,reject) => {
        materia = materias[id];
        if(materia == undefined){
            reject("La materia no existe");
        } else {
            setTimeout(() => {resolve(materia)},Math.random()*1000);
        }
    });
}

const devolverMaterias = async () => {
    let materia = [];
    for (let i = 0; i < materias.length; i++){
        // generacion de error
        // materia[i] = obtenerMateria(i);
        // materia[i].then(mat => console.log(mat));
        
        materia[i] = await obtenerMateria(i);
        let newHTMLCode = `
            <div class="materia">
                <div class="nombre">${materia[i].nombre}</div>
                <div class="nota">${materia[i].nota}</div>
            </div>
        `;
        materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMaterias();
