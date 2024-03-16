$(document).ready(function(){

    alert("Hola mundo desde jquery");

    // Obtenemos el contenido del texto de todas las etiquetas button
    let varBoton=$('button').html();
    console.log(varBoton);
    
    // Cambiamos el contenido del texto de todas las etiquetas button
    $('button').html("Cambiado desde jquery");
    
    // Cambiamos el contenido del texto de todas las etiquetas de clase btn
    $('.btn').html("Cambiado desde la clase");
    
    // Cambiamos el contenido del texto de todas las etiquetas de id boton
    $('#boton').html("Cambiado desde el id");
    
    // Cambiamos el contenido del texto de todas las etiquetas de tipo button que esten contenidas dentro de otra etiqueta de id subcntenedor
    $('#subcontenedor button').html("boton desde subcontenedor");
    
    
    // Cambiamos el contenido del texto de la ultima etiqueta button y la ultima
    $('button:first').html("primero");
    $('button:last').html("ultimo");
});

//document.querySelector('#boton').innerHTML="Cambiado  desde js";