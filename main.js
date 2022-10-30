let botonPesetas = document.querySelector(".convertPesetas");
let botonEuros = document.querySelector(".convertEuros");
let borrarPesetas = document.querySelector(".borrarPesetas");
let borrarEuros = document.querySelector(".borrarEuros");

//Eventos y funciones de conversion
botonPesetas.addEventListener("click", function(){
    var euros = 0.0060;
    var resultadoPesetas;
    var conversionEuros = parseFloat(document.querySelector(".pesetas").value);
    resultadoPesetas = euros / conversionEuros;
    document.querySelector(".resultado1").innerHTML = resultadoPesetas 
});

botonEuros.addEventListener("click", function(){
    var pesetas = 166.3860;
    var resultadoEuros;
    var conversionPesetas = parseFloat(document.querySelector(".pesetas").value);
    resultadoEuros = pesetas / conversionPesetas;
    document.querySelector(".resultado2").innerHTML = resultadoEuros;
})

//Eventos de los botones de borrado
borrarPesetas.addEventListener("click", function() {
    document.querySelector(".resultado1").innerHTML = '';
},false);

borrarEuros.addEventListener("click", function() {
    document.querySelector(".resultado2").innerHTML = '';
},false);
