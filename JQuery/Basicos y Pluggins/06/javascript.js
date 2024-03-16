$(document).ready(function(){
    $('#boton').click(function (e) { 
        e.preventDefault();
        $('img').attr('src', 'logo2.png');
    });
    $('#subcontenedor button:nth-child(1)').click(function (e) { 
        e.preventDefault();
        $('img').attr('width', '200px');
    });
    $('#subcontenedor button:nth-child(2)').click(function (e) { 
        e.preventDefault();
        let margen= $('img').css('margin-left');
        //alert(margen);
        margen=parseInt( margen.replace('px',''));
        margen=margen+30;
        $('img').css('margin-left', margen+'px');
    });
    $('#subcontenedor button:nth-child(3)').click(function (e) { 
        e.preventDefault();
        $('img').toggleClass('d-none');
    });



    // A partir de aqui se empiezan a ver el capitulo

    // No son muy buenas animaciones
    $('#subcontenedor button:nth-child(4)').click(function (e) { 
        e.preventDefault();
        $('img').hide('slow');
    });
    $('#subcontenedor button:nth-child(5)').click(function (e) { 
        e.preventDefault();
        $('img').show('fast');
    });
    $('#subcontenedor button:nth-child(6)').click(function (e) { 
        e.preventDefault();
        $('img').toggle(300);
    });

    // Desvanecer
    $('#subcontenedor button:nth-child(7)').click(function (e) { 
        e.preventDefault();
        $('img').fadeIn(300);
    });

    // Aparecer
    $('#subcontenedor button:nth-child(8)').click(function (e) { 
        e.preventDefault();
        $('img').fadeOut(300);
    });

    // Lo mismo que show y hide pero sin quitar opacidad
    $('#subcontenedor button:nth-child(9)').click(function (e) { 
        e.preventDefault();
        $('img').slideDown(300);
    });
    $('#subcontenedor button:nth-child(10)').click(function (e) { 
        e.preventDefault();
        $('img').slideUp(300);
    });
    $('#subcontenedor button:nth-child(11)').click(function (e) { 
        e.preventDefault();
        $('img').slideToggle(300);
    });

});

