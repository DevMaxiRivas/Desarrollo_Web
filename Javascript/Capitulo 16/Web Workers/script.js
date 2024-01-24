"use strict";

const worker = new Worker("worker.js");

const cargarData = async div => {
    const req = await fetch("informacion.txt");
    const res = await req.json();
    const arr = res;
}