// programa que ayude a una empresa a incrementar los salarios de los trabajadores de la siguiente manera:
// Tipo de salario Incremento Salarial
// [ % ] De 0 hasta $9000 ---- aumenta 20%
// De $9000 hasta $15000 ---- aumenta 10%
// De $15000 hasta $20000 ---- aumenta 5%
// Mas de $20000 3%
let opc
do {
  opc = (prompt("---------------------------BIENVENIDO/A!---------------------------\n Seleccione una opcion colocando el numero correspondiente:\n1 - Para aumentar un salario\n2 - Para calcular vacaciones\n3 - Para calcular aguinaldo\n0 - Para Salir"))
  switch (opc) {
    case "1":
      aumentarSalario();
      break;
    case "2":
      calcularVacaciones();
      break;
    case "3":
      // calcularAguinaldo();
      break;
    case "0":
      break;
    default:
      alert("Opcion no valida")
      break;
  }
} while (opc != 0);

function aumentarSalario(){
  let cargo = prompt("Ingrese el cargo jerarquico\n1 - Director.\n2 - Gerente.\n3 - Operario.\n4 - Auxiliar.")

  let salario = Number(prompt("Ingrese el salario."))
  let salarioAumentado

  if (cargo = "1"){
    aumento = 0.03
    salarioAumentado = salario + salario * aumento
  } else if (cargo = "2"){
    aumento = 0.05
    salarioAumentado = salario + salario * aumento
  } else if (cargo = "3"){
    aumento = 0.10
    salarioAumentado = salario + salario * aumento
  } else if (cargo = "4"){
    aumento = 0.2
    salarioAumentado = salario + salario * aumento
  }
  return alert(`El salario aumentará por un importe de ${salario * aumento}.\nPasará a cobrar ${salarioAumentado}`)
}

function calcularVacaciones(){
  antiguedad = Number(prompt("Ingrese la antiguedad del empleado en años."))
  if (antiguedad <= 5) {
    alert("Corresponden 14 dias corridos de vacaciones")
  } else if (antiguedad > 5 && antiguedad <= 10) {
    alert("Corresponden 21 dias corridos de vacaciones")
  } else if (antiguedad > 10 && antiguedad <= 20) {
    alert("Corresponden 28 dias corridos de vacaciones")
  } else if (antiguedad > 20) {
    alert("Corresponden 35 dias corridos de vacaciones")
  }
}

