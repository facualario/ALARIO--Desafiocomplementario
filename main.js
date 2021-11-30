

// Pido el nombre al usuario para darle la bienvenida a la pagina web /


let name = prompt("Bienvenido/a a Insumos Informaticos, por favor identifiquese con su nombre:");

while ( name === "") {

    name= prompt ( "No ha ingresado nada, por favor ingrese su nombre para poder continuar")
}

// Se le pedira que ingrese el monto el a pagar 

let amount = parseInt(prompt( "Ingrese el monto a pagar"))

// En base a este monto se agregara el proporcional del iva y dentro de la funcion se llamaran a las funciones correspondientes al calculo de las cuotas debido a que  la variable iva es una variable local

function calculoiva (){

    let iva = amount + amount*0.21;

    document.write ( "El total con iva incluido es de " + iva )

    calculotrescuotas(iva)
    calculoseiscuotas(iva)
    calculodocecuotas(iva)
    efectivo(iva)
} 


//Funcion para el calculo de 3 coutas con su interes
function calculotrescuotas (iva){

    let totaltrescoutas = iva * 1.10
    let trescoutas = totaltrescoutas / 3 

    document.write ( "<br> El total financiado en 3 coutas será de " + totaltrescoutas.toFixed(2) + " y cada couta sera de " + trescoutas.toFixed(2))
} 


//Funcion para el calculo de 6 coutas con su interes
function calculoseiscuotas (iva){

    let totalseiscoutas = iva * 1.20
    let seiscoutas = totalseiscoutas / 6 

    document.write ( "<br> El total financiado en 6 coutas será de " + totalseiscoutas.toFixed(2) + " y cada couta sera de " + seiscoutas.toFixed(2))
} 


//Funcion para el calculo de 12 coutas con su interes
function calculodocecuotas (iva){

    let totaldocecoutas = iva * 1.50
    let docecoutas = totaldocecoutas / 12 

    document.write ( "<br> El total financiado en 12 coutas será de " + totaldocecoutas.toFixed(2) + " y cada couta sera de " + docecoutas.toFixed(2))
} 


//Funcion para el calculo del pago en efectivo con un descuento
function efectivo (iva){

    let totalefectivo = iva * 0.85
    let descuentoefectivo = iva * 0.15

    document.write ( "<br> De abonar en efectivo se realizara un descuento de " + descuentoefectivo.toFixed(2) + " y el total a abonar sera de " + totalefectivo.toFixed(2))
} 

calculoiva()


