let botonConvertir = document.querySelector(".convertir");
var input = document.querySelector(".importe");

let roundToTwo = num => { //Funcion para redondear los numeros a 2 decimales
    return +(Math.round(num + "e+2")  + "e-2");
}

let case0 = () =>{ //Funcion para el 'case 0'
    var importe = roundToTwo(input.value);
    switch(document.getElementById('moneda2').selectedIndex){
        case 0: //De Euros a Euros
        if (isNaN(importe)) { //Salida cuando no hay valor en Importe
            document.querySelector(".resultado").innerHTML = "No se ha introducido ningun valor";
        } else {
            document.querySelector(".resultado").innerHTML = `El importe en Euros es de ${importe} €`;
            console.log(parseFloat(input.value)); //Testeo en consola
            console.log("La conversion es de Euros a Euros"); //Testeo en consola
        }    
            break;
        case 1: //De Euros a Libras
        if (isNaN(importe)) {//Salida cuando no hay valor en Importe
            document.querySelector(".resultado").innerHTML = "No se ha introducido ningun valor";
        } else {
            var operacion = roundToTwo(parseFloat(importe * 0.85590));
            document.querySelector(".resultado").innerHTML = `El importe en Libras es de ${operacion} £`;
            console.log(parseFloat(input.value)); //Testeo en consola
            console.log("La conversion es de Euros a Libras"); //Testeo en consola
        }
            break;
        case 2: //De Euros a Dolares
        if (isNaN(importe)) { //Salida cuando no hay valor en Importe
            document.querySelector(".resultado").innerHTML = "No se ha introducido ningun valor";
        } else {
            var operacion = roundToTwo(parseFloat(importe * 1.05000));
            document.querySelector(".resultado").innerHTML = `El importe en Dolares es de ${operacion} $`;
            console.log(parseFloat(input.value)); //Testeo en consola
            console.log("La conversion es de Euros a Dolares"); //Testeo en consola
        }
            break;
    }
}
let case1 = () => { //Funcion para el 'case 1'
    var importe = roundToTwo(parseFloat(input.value));
    switch(document.getElementById('moneda2').selectedIndex){
        case 0: //De Libras a Euros
        if (isNaN(importe)) { //Salida cuando no hay valor en Importe
            document.querySelector(".resultado").innerHTML = "No se ha introducido ningun valor";
        } else {
            var operacion = roundToTwo(parseFloat(importe * 1.16768));
            document.querySelector(".resultado").innerHTML = `El importe en Euros es de ${operacion} €`;
            console.log(parseFloat(input.value)); //Testeo en consola
            console.log("La conversion es de Libras a Euros"); //Testeo en consola
        }
            break;
        case 1: //De Libras a Libras
        if (isNaN(importe)) { //Salida cuando no hay valor en Importe
            document.querySelector(".resultado").innerHTML = "No se ha introducido ningun valor";
        } else {
            document.querySelector(".resultado").innerHTML = `El importe en Libras es de ${importe} £`;
            console.log(parseFloat(input.value)); //Testeo en consola
            console.log("La conversion es de Libras a Libras"); //Testeo en consola
        }
            break;
        case 2: //De Libras a Dolares
        if (isNaN(importe)) { //Salida cuando no hay valor en Importe
            document.querySelector(".resultado").innerHTML = "No se ha introducido ningun valor";
        } else {
            var operacion = roundToTwo(parseFloat(importe * 1.22600));
            document.querySelector(".resultado").innerHTML = `El importe en Dolares es de ${operacion} $`;
            console.log(parseFloat(input.value)); //Testeo en consola
            console.log("La conversion es de Libras a Dolares"); //Testeo en consola
        }
            break;
    }
}
let case2 = () => { //Funcion para el 'case 2'
    var importe = roundToTwo(parseFloat(input.value));
    switch(document.getElementById('moneda2').selectedIndex){
        case 0: //De Dolares a Euros
        if (isNaN(importe)) { //Salida cuando no hay valor en Importe
            document.querySelector(".resultado").innerHTML = "No se ha introducido ningun valor";
        } else {
            var operacion = roundToTwo(parseFloat(importe * 0.95265));
            document.querySelector(".resultado").innerHTML = `El importe en Euros de ${operacion} €`;
            console.log(parseFloat(input.value)); //Testeo en consola
            console.log("La conversion es de Dolares a Euros"); //Testeo en consola
        }
            break;
        case 1: //De Dolares a Libras
        if (isNaN(importe)) { //Salida cuando no hay valor en Importe
            document.querySelector(".resultado").innerHTML = "No se ha introducido ningun valor";
        } else {
            var operacion = roundToTwo(parseFloat(importe * 0.81586));
            document.querySelector(".resultado").innerHTML = `El importe en Libras es de ${operacion} £`;
            console.log(parseFloat(input.value)); //Testeo en consola
            console.log("La conversion es de Dolares a Libras"); //Testeo en consola
        }
            break;
        case 2: //De Dolares a Dolares
        if (isNaN(importe)) { //Salida cuando no hay valor en Importe
            document.querySelector(".resultado").innerHTML = "No se ha introducido ningun valor";
        } else {
            document.querySelector(".resultado").innerHTML = `El importe en Dolares es de ${importe} $`;
            console.log(parseFloat(input.value)); //Testeo en consola
            console.log("La conversion es de Dolares a Dolares"); //Testeo en consola
        }
            break;
    }
}
//Los indices van de 0-1-2 (hay tres en total) 
let conversionDivisas = () => {
switch (document.getElementById('moneda1').selectedIndex) {
    case 0: //Euros
        case0(); //Ejecuccion de la funcion del caso 0            
        break;

    case 1: //Libras
        case1(); //Ejecuccion de la funcion del caso 1
        break;
    
    case 2: //Dolares
        case2() //Ejecuccion de la funcion del caso 2
        break;    
    }
}
//Pulsando convertir se ejecutado toda la funcion prueba()
botonConvertir.addEventListener("click", function(){
    conversionDivisas(); //Funcion conversion de divisas
});
