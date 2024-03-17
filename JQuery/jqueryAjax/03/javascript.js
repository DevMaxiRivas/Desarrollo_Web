$(document).ready(function () {
    $("#leer").click(function (e) { 
        e.preventDefault();
        $.get("archivo.txt",function(data,textStatus,jqXHR){    // Peticion get que obtiene el contenido de la URI que mandamos de la funcion 
            console.log(data);
            //console.log(textStatus);
            //console.log(jqXHR);
        });
    });
    $('#leerEmpleado').click(function (e) { 
        e.preventDefault();
        $.get("empleados.json",function(data){
            console.log(data);
            $('#datosEmpleado').html(`
            Nombre: ${data.nombre} <br>
            Puesto: ${data.puesto} <br>
            Edad: ${data.edad} <br>
            `);
        });
    });
    $('#leerArregloEmpleado').click(function (e) { 
        e.preventDefault();
        $('#listaEmpleados').html('');
        $.get("empleados.json",function(data){
            //console.log(data);
            $.each(data, function (index, item) { 
                $('#listaEmpleados').html($('#listaEmpleados').html()+`
                <li> ${item.nombre} -- ${item.puesto} </li>
                `);
            });
        });
    });
});