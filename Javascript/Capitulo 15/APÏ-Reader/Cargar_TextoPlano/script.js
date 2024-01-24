"use strict";

const archivo = document.getElementById("archivo");
archivo.addEventListener("change",(e) => {
    leerArchivos(archivo.files);
});

const leerArchivos = ar => {
    console.log(ar);
    for(const archivo of ar){
        const reader = new FileReader();
        reader.readAsText(archivo);
        reader.addEventListener("load",(e)=>{
        console.log(JSON.parse(e.currentTarget.result));
        document.body.innerHTML += "<br>" + e.currentTarget.result;
    });
    }

}
