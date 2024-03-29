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
    $('#subcontenedor button:nth-child(7)').click(function (e) { 
        e.preventDefault();
        $('img').fadeIn(300);
    });
    $('#subcontenedor button:nth-child(8)').click(function (e) { 
        e.preventDefault();
        $('img').fadeOut(300);
    });
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


    // Desde aqui comienza lo nuevo
    $('#subcontenedor button:nth-child(12)').click(function (e) { 
        e.preventDefault();
        $('img').animate({
            'margin-left':'+=100px',
            'opacity':'0.5',
            'width':'150px'
        },
        // tiempo en realizar  la animacion
        1000,
        // callback se realiza la definicion de la funcion
        // que se debe ejecutar una vez terminada la animacion
        function(){
            $('img').animate({
                'margin-left':'-=100px',
                'opacity':'1',
                'width':'200px'
            },2000);
        }
        );
    });

    // Botones para scrolear de arriba a abajo y biseversa
    $('#subir').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({scrollTop:0},1000);
    });
    $('#bajar').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({scrollTop:$(document).height()-$(window).height()},1000);
    });

});

