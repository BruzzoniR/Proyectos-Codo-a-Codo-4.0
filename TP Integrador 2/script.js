var form = document.querySelector('form');
var cantidad = document.getElementById('controlCantidad');
var categoria = document.getElementById('controlCategoria');
var borrar = document.getElementById('borrar');
var resumen = document.getElementById('resumen');
var montoPagar = document.getElementById('montoPagar');
var descuento = [0,0.2,0.5,0.85]

resumen.onclick = function() {
    montoPagar.innerText=200*cantidad.value*descuento[categoria.value];
    }

borrar.onclick = function(){
    montoPagar.innerText="";
}