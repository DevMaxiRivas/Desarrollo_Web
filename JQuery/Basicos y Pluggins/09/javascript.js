$(document).ready(function(){

    $('#fecha').daterangepicker({
        locale:{ format:"YYYY-MM-DD hh:mm:ss"},             // damos formato a la fecha
        timePicker:true,                                    // Permitimos que se seleccione la hora
        startDate:moment().startOf('hour'),                 // Predefinimos desde que hora y fecha va a empezar
        endDate:moment().startOf('hour').add(48,'hour')     // Predefinimos desde que hora y fecha va a terminar (despues de la actual mas 2 dias)
    },function(inicio,fin){                                 // Se define una funcion que se ejecutara luego de que se seleccionen las fechas de inicio y fin
        console.log(inicio.format('YYYY-MM-DD hh:mm:ss')+" - "+fin.format('YYYY-MM-DD hh:mm:ss'));
    });


    $('#fecha2').daterangepicker({
        locale:{ format:"YYYY-MM-DD hh:mm:ss" },
        singleDatePicker:true,                              // En vez de que se muestren 2 calendarios solo 1
        showDropdowns:true,                                 // Permitimos que se puedan seleccionar los meses y los anios por medio de un select
        timePicker:true,
        minYear:2000,
        maxYear:moment().format('YYYY'),
        startDate:moment().startOf('hour'),
        endDate:moment().startOf('hour').add(48,'hour')
    },function(inicio,fin){
        console.log(inicio.format('YYYY-MM-DD hh:mm:ss')+" - "+fin.format('YYYY-MM-DD hh:mm:ss'));
    });

});

