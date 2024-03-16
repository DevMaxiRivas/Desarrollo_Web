$(document).ready(function(){
    // podemos agregar/eliminar una clase de acuerdo al selector usando el sniped jqClassAdd
    $('#boton').addClass('btn-danger');
    $('#boton').removeClass('btn-primary');
    
    // podemos agregar al principio/final de una etiqueta con un id subcontenedor de acuerdo al selector usando el sniped jqClassAdd
    $('#subcontenedor').append('<button type="button" class="btn btn-danger">agregado con append</button>');
    $('#subcontenedor').prepend('<button type="button" class="btn btn-danger">agregado con prepend</button>');

    $('#boton').css({'color':'blue','background-color':'yellow'});
    //$('#boton').css('background-color', 'yellow');

    //$('#subcontenedor').remove();
    //$('#subcontenedor').hide();
    $('img').attr({'src':'logo2.png','width':'400px'});
    //$('img').attr('width', '300px');
});

