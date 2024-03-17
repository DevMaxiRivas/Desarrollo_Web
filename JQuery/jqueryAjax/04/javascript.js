$(document).ready(function () {
    // Lo que hace esto es una comparacion que donde a la hora de 
    // obtener los datos de una fuente que devuelve un string
    // get JSON ya lo aplica JSON.
    $('#leerGetSON').click(function (e) { 
        e.preventDefault();
        $.getJSON("empleados.txt",function(data){
            data=JSON.parse(data);
            console.log(data);
        });
        $.getJSON("empleados.json",function(data){
            console.log(data);
        });
    });
});