const inversion = document.getElementById('cantidadOriginal');
const porcentaje = document.getElementById('interes');
const tiempo = document.getElementById('tiempo');
const simples = document.getElementById('standard');
const compuestos = document.getElementById('Compuesto');
var cantidadFinal = "";
const div = document.getElementById('Resultado');
const p = document.createElement('p');


// function validarDiv(p.value) {
//     if (isNaN(p.value)) {
//         div.classList.add("off");
//     } else {
//         div.classList.add("on");
//     }
// }

//error en los valores introducidos
function validarNumero(cantidadOriginal, interes, tiempo) {
    //Tambien se puede utilizar isNan para validar el campo
    // if (isNaN(cantidadOriginal)) {
    //     alert("El valor  " + cantidadOriginal + "  no es un número");
    // } else {
    //     return true;
    // }
    if (!/^([0-9])*$/.test(cantidadOriginal)) {
        alert("El valor  " + cantidadOriginal + "  no es un número");
    } else if (!/^([0-9])*$/.test(interes)) {
        alert("El valor  " + interes + "  no es un número");
    } else if (!/^([0-9])*$/.test(tiempo)) {
        alert("El valor  " + tiempo + "  no es un número");
    }
}

//cuando el usuario pulse el metodo de calcular 
//pasar el valor del input como parametros de las funciones
//Creo el evento en  el html
// simples.addEventListener("click", simple(inversion.value, porcentaje.value, tiempo.value));
// compuestos.addEventListener("click", compuesto(inversion.value, tiempo.value, porcentajes));

//Interes simple I = CRT/100
function simple(cantidadOriginal, interes, tiempo) {
    let ganacia = "";
    validarNumero(cantidadOriginal, interes, tiempo);
    cantidadOriginal = new Number(cantidadOriginal);
    tiempo = new Number(tiempo);
    interes = new Number(interes);
    ganacia = (cantidadOriginal * interes * tiempo);
    cantidadFinal = cantidadOriginal + ganacia;
    mostrar(cantidadFinal);
}

//Interes compuesto CF = CO (1 + r)elevado al cubo
function compuesto(cantidadOriginal, tiempo, interes) {
    validarNumero(cantidadOriginal, interes, tiempo);
    cantidadOriginal = new Number(cantidadOriginal);
    tiempo = new Number(tiempo);
    interes = new Number(interes);
    interes = interes + 1;
    let ele = interes ** tiempo;
    cantidadFinal = cantidadOriginal * ele;
    mostrar(cantidadFinal);
}

//mostrar el resultado
function mostrar(cantidadFinal) {
    p.innerHTML = `<p>${cantidadFinal}</p>`;
    div.appendChild(p);
}

//limpiar campos
function clean() {
    inversion.value = "";
    porcentaje.value = "";
    tiempo.value = "";
}