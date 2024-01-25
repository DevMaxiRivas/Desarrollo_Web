"use strict";

// funcion para obtener un string con el timestamp desde el momento actual 
//  hasta despues de los dias pásados por parametros
const newFecheUTC = dias => {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000);
    return fecha.toUTCString();
}

const crearCookie = (name,dias) => {
    let expires = newFecheUTC(dias);
    document.cookie = `${name};expires=${expires}`;
}

// crearCookie("usuario=maxi",3);

const obtenerCookie = cookieName => {
    // recordar que esto me devuelve un string
    let cookies = document.cookie;
    cookies = cookies.split(";");
    for(let cookie of cookies){
        cookie = cookie.trim();
        if(cookie.startsWith(cookieName)){
            return cookie.split("=")[1];
        }
    }
    return "No hay cookies con ese nombre";
}
const modificarCookie = (cookieName,valor) => {
    document.cookie = `${cookieName}=${valor}`;
}
const borrarCookie = (cookieName) => {
    document.cookie = `${cookieName}=undefined;max-age=0`;
}

if(obtenerCookie("acceptedCookies") !== "si"){
    setTimeout(()=>{
        document.querySelector(".bg-modal").style.zIndex = "10";
        document.querySelector(".bg-modal").style.opacity = "1";
        document.getElementById("accept").addEventListener("click",()=>{
            crearCookie("acceptedCookies=si",30);
            document.querySelector(".bg-modal").style.opacity = "0";
            setTimeout(()=>{
                document.querySelector(".bg-modal").style.zIndex = "-1";
            },1000);
        });
        document.getElementById("deny").addEventListener("click",()=>{
            crearCookie("acceptedCookies=no",30);
            document.querySelector(".bg-modal").style.opacity = "0";
            setTimeout(()=>{
                document.querySelector(".bg-modal").style.zIndex = "-1";
            },1000);
        });
    },200);
}