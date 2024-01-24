"use strict";

addEventListener("visibilitychange", e=>{
    if(e.target.visibilityState == "visible"){
        document.write("che, porque te fuiste de la pagina");
    } else {
        alert("ah volviste");
    }
});

// se utiliza para estar atento a cuando el usuario 
// se mantiene o se va de la pestaña actual
// Puede usarse por ejemplo para cuando se esta reproduciendo
// algo, se puede poner en pausa lo que se esta reproduciendo