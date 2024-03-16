$(document).ready(function(){
    // podemos agregar/eliminar una clase de acuerdo al selector usando el 
    // sniped jqClassAdd
    $('#boton').addClass('btn-danger');
    $('#boton').removeClass('btn-primary');
    
    // podemos agregar al principio/final de una etiqueta con un id 
    // subcontenedor una nueva etiqueta
    $('#subcontenedor').append('<button type="button" class="btn btn-danger">agregado con append</button>');
    $('#subcontenedor').prepend('<button type="button" class="btn btn-danger">agregado con prepend</button>');

    // ¨Podemos modificar directamente las propiedades CSS de la etiqueta
    $('#boton').css({'color':'blue','background-color':'yellow'});
    //$('#boton').css('background-color', 'yellow');

    // Removemos el selector con id subcontenedor
    //$('#subcontenedor').remove();

    // Lo que hace hide es agregarle la propiedad CSS dysplay: none
    //$('#subcontenedor').hide();

    // Mpdofocamos los atributos html de la etiqueta utilizando un
    // objeto de javascript
    $('img').attr({'src':'logo2.png','width':'400px'});
    //$('img').attr('width', '300px');
});

