// A) Las mesas de exauen ya finalizaron y el profesor le tomó un último exa•en especial a
// cofia, ya cofia hizo 2 pruebas mas, pero se rompió el sistena de inscripción
// de notas, por ende habrá que crear una solución a este proble•a, desarrollando una web que
// sea capás de simular su
// - Crear mini interfaz para introchlcir nota
// - Validar que no haya errores
// - Se debe proaediar la nota del profesor, con otras 2 notas de trabajos anteriores
// - Si el proaedio es mayor a 7/10 - > Aprobó la materia

const sendButton = document.getElementById("snd-nota");
sendButton.addEventListener("click", ()=>{
    let resultado, mensaje, prevRes;
    try{
        prevRes = parseInt(document.getElementById("nota").value);
        if(isNaN(prevRes)){
            throw "Gracioso";
        }
        resultado = verificarAprobacion(8,4,prevRes);
        mensaje = definirMensaje(resultado[1]);
    }catch(e){
        resultado = "SOS GRACIOSO?";
        mensaje = "He descubierto queintentaste hackear el sitio";
    }
    abrirModal(resultado[0],mensaje);
});

const definirMensaje = (pr) =>{
    let resultado;
    switch(pr){
        case 1: resultado = "No podes ser tan MALO"; break;
        case 2: resultado = "Sos malisimo para mi materia"; break;
        case 3: resultado = "No sabes casi nada"; break;
        case 4: resultado = "Muy Mal"; break;
        case 5: resultado = "Mal"; break;
        case 6: resultado = "Regular"; break;
        case 7: resultado = "Bien, pero puede mejorar"; break;
        case 8: resultado = "¡Muy Bien!"; break;
        case 9: resultado = "¡Excelente!"; break;
        case 10: resultado = "¡Crack!"; break;
        default: resultado = null; break;
    }
    return resultado;
}
const verificarAprobacion = (nota1, nota2, prevRes) =>{
    let promedio = (nota1 + nota2 + prevRes) / 3;
    if(promedio >= 7){
        return ["<span class = 'green'>APROBADO</span>",Math.round(promedio)]
    } else {
        return ["<span class = 'red'>DESAPROBADO</span>",Math.round(promedio)]
    }
}
const abrirModal = (res,msg) =>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = "Nota en base al promedio: " + msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
}