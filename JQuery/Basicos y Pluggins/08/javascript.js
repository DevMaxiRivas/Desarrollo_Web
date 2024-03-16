$(document).ready(function(){
    // Habilitamos el disenio de la libreria
    //$('.chosen-select').chosen();

    // Cambiamos el mensaje que aparece cuando no hay coincidencias
    //$('.chosen-select').chosen({no_results_text:"Ups no hay nada que diga: "});

    // desactiva el buscador si hay menos de 11 opciones
    //$('.chosen-select').chosen({disable_search_threshold:11});

    // Acota la cantidad de opciones a seleccionar en un select multiple
    //$('.chosen-select').chosen({max_selected_options:3});

    // la primera modificacion mueve invierte para donde estan orientados los elementos
    // la segunda es la misma caracteristica que la anterior
    //$('.chosen-select').chosen({rtl:true,max_selected_options:3});

    // cada vez que se selecciona algo se ejecuta la funcion
    $('.chosen-select').chosen().change(function(){
        //alert("cambio");

        // this es para referirse al elemento actual
        alert($(this).val());

    });
});

