$(document).ready(function(){ 
    $('#boton').click(function (e) {  // snipet para el click jqClick
        // lo que hace este metodo es evitar que al enviar un
        // formulario la pagina se actualice
        e.preventDefault(); 
        $('img').attr('src', 'logo2.png');
    });
    $('#subcontenedor button:nth-child(1)').click(function (e) { 
        e.preventDefault();
        $('img').attr('width', '200px');
    });
    $('#subcontenedor button:nth-child(2)').click(function (e) { 
        e.preventDefault();
        let margen = $('img').css('margin-left');
        //alert(margen); Con esto podemos ver que en la vble margen
        // nps devielve el tamaño de la imagen
        margen = parseInt( margen.replace('px',''));
        margen += 30;
        $('img').css('margin-left', margen+'px');
    });
    // en este caso cada vez que se de click se va a ocultar o mostrar el elemento
    $('#subcontenedor button:nth-child(3)').click(function (e) { 
        e.preventDefault();
        // lo que hace toggleClass es quitar y poner la clase
        $('img').toggleClass('d-none');
    });

});

