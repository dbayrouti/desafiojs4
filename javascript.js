let ingreseMonto = Number(prompt("Ingrese el monto que desea calcular"));
let ingreseIva = prompt("Ingrese el IVA correspondiente a su pais");

function operacion(ingreseMonto, ingreseIva, operacion) {
  switch (operacion) {
    case "*":
      return ingreseMonto * ingreseIva;
      break;
  }
}
console.log(operacion(ingreseMonto, ingreseIva, "*"));
alert(operacion(ingreseMonto, ingreseIva, "*"));
