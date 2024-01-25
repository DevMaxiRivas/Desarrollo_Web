// se podria usar this pero comunmente para ServiceWorker se utiliza self

self.addEventListener("install", () => {
    console.log("instalando service worker");
});
self.addEventListener("activate", () => {
    console.log("el service worker esta activo");
});
self.addEventListener("fetch", () => {
    console.log("service worker interceptando peticion");
});
self.addEventListener("message", e => {
    console.log("Mensaje recibido del navegador");
    console.log(e.data);
    e.source.postMessage("Hola");
});
