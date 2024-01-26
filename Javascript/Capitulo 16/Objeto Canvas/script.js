"use strict";

const canvas = document.getElementById("canvas");
// los graficos se aplican sobre el contexto ctx
const ctx = canvas.getContext("2d");

// definimos el ancho de la linea
ctx.lineWidth = "6";
// cambiamos de estilo del border
ctx.strokeStyle = "#48e"
// cambiamos de estilo del cuerpo
ctx.fillStyle = "#48e"

// creamos cuadrados
ctx.strokeRect(30,50,400,200);
ctx.fillRect(10,20,400,200);

// creacion de lineas
// primero definimos los puntos para formar la forma
ctx.lineTo(100,300);
ctx.lineTo(120,350);
ctx.lineTo(100,400);
ctx.lineTo(120,450);
// unimos los puntos con
ctx.stroke();
// para empezar otra forma le decimos que
ctx.closePath();
//Ahora con esto le decimos que vamos a crear un nuevo conjunto de puntos
ctx.beginPath();
// cambiamos color para diferenciarlo
ctx.strokeStyle = "#4ff"

ctx.lineTo(80,300);
ctx.lineTo(80,200);
ctx.stroke();
ctx.closePath();

//Ahora con esto le decimos que vamos a crear un nuevo conjunto de puntos
ctx.beginPath();
ctx.strokeStyle = "#f00"
// generaremos un circulo
ctx.arc(120,100,100,10,40);
ctx.stroke();
