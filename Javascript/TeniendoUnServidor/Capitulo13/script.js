// Cofia ya esta cursando su último semestre en la universidad. Efectivmente tuvo todo 10 
// necesario para pasar de año» peeero el tiene una duda, quiere saber cuantas personas
// que cursan el último semestre, se reciben y cuantas no, esta información la api
// de su universidad a la que eI tiene fácil acceso.
// - Crear un sistema para obtener esa información
// - Mostrarla ordenadmente en un sitio web 

const getInfo = async () => {
    let aprobados = document.querySelector(".num-aprobados")
    let desaprobados = document.querySelector(".num-desaprobados")
    try{
        // exito
        let resultado = await axios("informacion.txt");
        // error
        // let resultado = await axios("inforwmacion.txt");
        aprobados.innerHTML = resultado.data.aprobados;
        desaprobados.innerHTML = resultado.data.desaprobados;
    } catch(e){
        aprobados.innerHTML = "La API fallo";
        desaprobados.innerHTML = "La API fallo";
    }
}

document.getElementById("getInfo").addEventListener("click",getInfo);