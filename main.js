// PROGRAMA QUE AYUDE A UNA EMPRESA A CALCULAR EL AUMENTO DE SALARIO, CALCULAR VACACIONES Y CALCULAR AGUINALDO DE UN EMPLEADO.

// TIPO DE INCREMENTO SEGUN SALARIO.
// [ % ] 0 a 9000 ---- aumenta 20%
// 9000 a 15000 ---- aumenta 10%
// 15000 a 20000 ---- aumenta 5%
// 20000 ---- 3%


// Menu principal

let opc
do {

  // Se crea un do while y dentro un switch para que el usuario pueda seleccionar una opcion.
  opc = (prompt("---------------------------BIENVENIDO/A!---------------------------\n Seleccione una opcion colocando el numero correspondiente:\n1 - Para calcular aumento de salario\n2 - Para calcular vacaciones\n3 - Para calcular aguinaldo\n0 - Para Salir"))
  switch (opc) {
    case "1":
      calcularIncrementoSalario();
      break;
    case "2":
      calcularVacaciones();
      break;
    case "3":
      calcularAguinaldo();
      break;
    case "0":
      break;
    default:
      alert("Opcion no valida")
      break;
  }
} while (opc != 0);

// Funciones

function calcularIncrementoSalario() {
  // Solicitar al usuario que ingrese el salario
  let salario = parseFloat(prompt("Ingrese su salario:"));
  let aumento;
  
  // Determinar el porcentaje de aumento según el salario
  if (salario <= 9000) {
      aumento = 0.20; // 20% de aumento
  } else if (salario > 9000 && salario < 15000) {
      aumento = 0.10; // 10% de aumento
  } else if (salario >= 15000 && salario < 20000) {
      aumento = 0.05; // 5% de aumento
  } else {
      aumento = 0.03; // 3% de aumento
  }
  
  // Calcular el nuevo salario
  let nuevoSalario = salario + (salario * aumento);
  
  // Mostrar el resultado
  alert(`Salario original: $${salario.toFixed(2)}\nAumento: ${aumento * 100}%\nNuevo salario: $${nuevoSalario.toFixed(2)}`);
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

function calcularAguinaldo() {
  // Solicitar al usuario el sueldo mensual
  const sueldoMensual = parseFloat(prompt("Ingresa el sueldo mensual del empleado:"));
  
  // Solicitar al usuario los meses trabajados
  const mesesTrabajados = parseInt(prompt("Ingresa la cantidad de meses trabajados en el año (1 a 12):"), 10);
  
  // Validar meses trabajados
  if (mesesTrabajados <= 0 || mesesTrabajados > 12) {
      alert("Meses trabajados debe estar entre 1 y 12.");
      return;
  }
  
  // Calcular el aguinaldo
  const aguinaldo = sueldoMensual * (mesesTrabajados / 12);
  
  // Mostrar el resultado
  alert(`El aguinaldo correspondiente es: $${aguinaldo.toFixed(2)}`);
}
