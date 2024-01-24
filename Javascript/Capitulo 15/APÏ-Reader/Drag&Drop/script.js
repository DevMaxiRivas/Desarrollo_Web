
const zona = document.querySelector(".zona-arrastre");

zona.addEventListener("dragover", e => {
    e.preventDefault();
    changeStyle(e.srcElement,"#444");
});
zona.addEventListener("dragleave", e => {
    e.preventDefault();
    changeStyle(e.srcElement,"#888");
});
zona.addEventListener("drop", (e)=>{
    e.preventDefault();
    changeStyle(e.srcElement,"#888");
    cargarArchivo(e.dataTransfer.files[0]);
    zona.style.border = "4px solid #888";
});

const changeStyle = (obj,color)=>{
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
}
// Para texto plano
// const cargarArchivo = ar => {
//     const reader = new FileReader();
//     reader.readAsText(ar);
//     reader.addEventListener("load", e => {
//         document.querySelector(".resultado").textContent = e.currentTarget.result;
//     })
// }

// Para cargar una imagen
// const cargarArchivo = ar => {
//     const reader = new FileReader();
//     reader.readAsDataURL(ar);
//     reader.addEventListener("load", e => {
//         // con esta sentencia creamos una URL temporal para la imagen
//         let url = URL.createObjectURL(ar);
//         let img = document.createElement("IMG");
//         img.setAttribute("src",url);
//         document.querySelector(".resultado").appendChild(img);
//     })
// }

// para un video
const cargarArchivo = (ar)=>{
    const reader = new FileReader();
    reader.readAsArrayBuffer(ar);
    reader.addEventListener("progress", e=>{
        let carga = Math.round(e.loaded / ar.size * 100);
        zona.textContent = `${carga}%`;
        document.querySelector(".barra-de-carga").style.padding = "75px 20px";
        document.querySelector(".barra-de-carga").style.width = `${carga/3.6}%`;
    });
    reader.addEventListener("loadend",e=>{
        changeStyle(zona,"#2e7");
        zona.style.border = "solid";
        document.querySelector(".barra-de-carga").style.background = "#2e7";
        setTimeout(()=>{
            zona.style.color = "#fff";
            zona.style.animation = "aparecer 1s forwards";
            zona.textContent = "Carga Completa!";
        },0.5)
    });
    reader.addEventListener("load", (e)=>{
        let video = new Blob([new Uint8Array(e.currentTarget.result)],{type: 'video/mp4'});
        let url = URL.createObjectURL(video);
        let img = document.createElement("VIDEO");
        img.setAttribute("src",url);
        document.querySelector(".resultado").appendChild(img);
        img.play();
    })
}