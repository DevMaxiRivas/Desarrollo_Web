$(document).ready(function () {
    $('#leerGetSON').click(function (e) { 
        e.preventDefault();
                
        $.getJSON("empleados.json",function(data){
            console.log(data.empleados);
            $('#listaEmpleados').html('');
            $.each(data.temporales, function (index, item) { 
                $('#listaEmpleados').html($('#listaEmpleados').html()+`
                <li> ${item.nombre} -- ${item.puesto} </li>
                `);
           });
        });
    });
});