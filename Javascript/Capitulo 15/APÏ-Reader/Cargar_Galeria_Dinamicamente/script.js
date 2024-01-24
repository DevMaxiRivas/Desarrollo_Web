"use strict";

const archivo = document.getElementById("archivo");
archivo.addEventListener("change",(e) => {
    leerArchivos(archivo.files);
});

const leerArchivos = ar => {
    console.log(ar);
    for(const archivo of ar){
        const reader = new FileReader();
        reader.readAsDataURL(archivo);
        reader.addEventListener("load",(e)=>{
        let newImg = `<img src = '${e.currentTarget.result}'>`;
        document.querySelector(".resultado").innerHTML += newImg;
    });
    }

}
