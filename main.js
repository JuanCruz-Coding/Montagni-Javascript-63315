let nro = Number(prompt("Bienvenido al simulador de descuentos.\nEscriba el importe al que quiere aplicar el descuento."))
let desc = Number(prompt("Qué descuento quiere aplicar? ecriba el numero y este será el porcentaje a aplicar."))
let montoFinal = (nro - (nro * desc)/100)

if (isNaN(nro)) {
    alert("Debes ingresar un nro.")
} 
if (isNaN(desc)){
    alert("No puedes ingresar caraceteres que no sean numeros.")
}
if (isNaN(montoFinal)) {
    alert("Error, vuelve a intentar, escribe numeros y no letras.")
} else {
    alert("El importe es de: $" + nro + "\n" + "El descuento es de: $" + desc + "\n" + "El monto final es de: $" + montoFinal)
}
