"use strict";

if(navigator.serviceWorker){
    navigator.serviceWorker.register("sw.js");
}
// siempre que veamos .then es porque el metodo o funcion devuelve una promesa
navigator.serviceWorker.ready.then(res => {
    res.active.postMessage("hola como estas?")
});

navigator.serviceWorker.addEventListener("message", e => {
    console.log("Mensaje recibido del service worker");
    console.log(e.data);
});