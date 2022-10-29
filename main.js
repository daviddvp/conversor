let botonPesetas = document.querySelector(".convertPesetas");
let botonEuros = document.querySelector(".convertEuros");

botonPesetas.addEventListener("click", conversion1);
botonEuros.addEventListener("click", conversion2);

function conversion1() {
    var euros = 0.0060;
    var resultadoPesetas;
    var conversionEuros = parseFloat(document.querySelector(".pesetas").value);
    resultadoPesetas = euros / conversionEuros;
    document.querySelector(".resultado1").innerHTML = resultadoPesetas ;
}
function conversion2() {
    var pesetas = 166.3860;
    var resultadoEuros;
    var conversionPesetas = parseFloat(document.querySelector(".pesetas").value);
    resultadoEuros = pesetas / conversionPesetas;
    document.querySelector(".resultado2").innerHTML = resultadoEuros;
}


