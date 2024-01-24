"use strict";

if(!('Notification' in window)){
    console.log("Las notificaciones no estan disponibles para tu navegador");
}

Notification.requestPermission(()=>{
    if(Notification.permission == "granted"){
        // la notificacion se envia apenas se instancia el objeto
        new Notification("Hola, te envie una notificacion");
    }
});