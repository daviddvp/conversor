let botonConvertir = document.querySelector(".convertir");
var input = document.querySelector(".importe");

function roundToTwo(num) { //Funcion para redondear los numeros a 2 decimales
    return +(Math.round(num + "e+2")  + "e-2");
}

function case0(){ //Pruebas para el 'case 0'
// const case0 = () => { //Prueba de Fat Arrow Function
    var importe = roundToTwo(input.value);
    switch(document.getElementById('moneda2').selectedIndex){
        case 0: //De Euros a Euros
            document.querySelector(".resultado").innerHTML = `El importe en Euros es de ${importe} €`;
            console.log(parseFloat(input.value)); //Testeo en consola
            console.log("La conversion es de Euros a Euros"); //Testeo en consola
            break;
        case 1: //De Euros a Libras
            var operacion = roundToTwo(parseFloat(importe * 0.85590));
            document.querySelector(".resultado").innerHTML = `El importe en Libras es de ${operacion} £`;
            console.log(parseFloat(input.value)); //Testeo en consola
            console.log("La conversion es de Euros a Libras"); //Testeo en consola
            break;
        case 2: //De Euros a Dolares
            var operacion = roundToTwo(parseFloat(importe * 1.05000));
            document.querySelector(".resultado").innerHTML = `El importe en Dolares es de ${operacion} $`;
            console.log(parseFloat(input.value)); //Testeo en consola
            console.log("La conversion es de Euros a Dolares"); //Testeo en consola
            break;
    }
}
function case1(){ //Funcion para el 'case 1'
    var importe = roundToTwo(parseFloat(input.value));
    switch(document.getElementById('moneda2').selectedIndex){
        case 0: //De Libras a Euros
            var operacion = roundToTwo(parseFloat(importe * 1.16768));
            document.querySelector(".resultado").innerHTML = `El importe en Euros es de ${operacion} €`;
            console.log(parseFloat(input.value)); //Testeo en consola
            console.log("La conversion es de Libras a Euros"); //Testeo en consola
            break;
        case 1: //De Libras a Libras
            document.querySelector(".resultado").innerHTML = `El importe en Libras es de ${importe} £`;
            console.log(parseFloat(input.value)); //Testeo en consola
            console.log("La conversion es de Libras a Libras"); //Testeo en consola
            break;
        case 2: //De Libras a Dolares
            var operacion = roundToTwo(parseFloat(importe * 1.22600));
            document.querySelector(".resultado").innerHTML = `El importe en Dolares es de ${operacion} $`;
            console.log(parseFloat(input.value)); //Testeo en consola
            console.log("La conversion es de Libras a Dolares"); //Testeo en consola
            break;
    }
}
function case2(){ //Funcion para el 'case 2'
    var importe = roundToTwo(parseFloat(input.value));
    switch(document.getElementById('moneda2').selectedIndex){
        case 0: //De Dolares a Euros
            var operacion = roundToTwo(parseFloat(importe * 0.95265));
            document.querySelector(".resultado").innerHTML = `El importe en Euros de ${operacion} €`;
            console.log(parseFloat(input.value)); //Testeo en consola
            console.log("La conversion es de Dolares a Euros"); //Testeo en consola
            break;
        case 1: //De Dolares a Libras
            var operacion = roundToTwo(parseFloat(importe * 0.81586));
            document.querySelector(".resultado").innerHTML = `El importe en Libras es de ${operacion} £`;
            console.log(parseFloat(input.value)); //Testeo en consola
            console.log("La conversion es de Dolares a Libras"); //Testeo en consola
            break;
        case 2: //De Dolares a Dolares
            document.querySelector(".resultado").innerHTML = `El importe en Dolares es de ${importe} $`;
            console.log(parseFloat(input.value)); //Testeo en consola
            console.log("La conversion es de Dolares a Dolares"); //Testeo en consola
            break;
    }
}
//Los indices van de 0-1-2 (hay tres en total)
function conversionDivisas(){
switch (document.getElementById('moneda1').selectedIndex) {
    case 0: //Euros
        case0(); //Funcion del caso0            
        break;

    case 1: //Libras
        case1(); //Funcion de caso1
        break;
    
    case 2: //Dolares
        case2() //Funcion del caso 2
        break;    
    }
}
//Pulsado convertir se ejecutado toda la funcion prueba()
botonConvertir.addEventListener("click", function(){
    conversionDivisas(); //Funcion conversion de divisas
});  
