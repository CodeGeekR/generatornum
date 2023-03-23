function generarNumeroPasaporte() {
  var letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeros = "0123456789";

  var pasaporte = "";

  // Generar las dos letras iniciales
  for (var i = 0; i < 2; i++) {
    pasaporte += letras.charAt(Math.floor(Math.random() * letras.length));
  }

  // Generar los siguientes seis dígitos
  for (var i = 0; i < 6; i++) {
    pasaporte += numeros.charAt(Math.floor(Math.random() * numeros.length));
  }

  // Generar la letra final
  pasaporte += letras.charAt(Math.floor(Math.random() * letras.length));

  // Verificar que el pasaporte generado cumple con el formato requerido
  var regex = /^[A-Z]{2}\d{6}[A-Z]$/;
  if (!regex.test(pasaporte)) {
    // Si el pasaporte no cumple con el formato, generar uno nuevo
    return generarNumeroPasaporte();
  }

  return pasaporte;
}

var pasaporteInput = document.getElementById("numero-passport");
var mensaje = document.getElementById("mensaje");

document
  .getElementById("generar-passport")
  .addEventListener("click", function () {
    var pasaporte = generarNumeroPasaporte();
    pasaporteInput.value = pasaporte;
    mensaje.innerHTML = "¡Número de pasaporte generado correctamente!";
  });

document
  .getElementById("copiar-passport")
  .addEventListener("click", function () {
    // Copiar el número de pasaporte al portapapeles
    pasaporteInput.select();
    document.execCommand("copy");

    // Mostrar un mensaje de confirmación
    mensaje.innerHTML = "¡Número de pasaporte copiado al portapapeles!";
  });

// Función para generar un número aleatorio de tarjeta de crédito Visa

var numeroVisaInput = document.getElementById("numero-visa");
var mensajeVISA = document.getElementById("mensajeVISA");

function generarNumeroVisa() {
  let numero = "4"; // El número 4 es el prefijo para las tarjetas de crédito Visa
  for (let i = 0; i < 15; i++) {
    numero += Math.floor(Math.random() * 10); // Generar un dígito aleatorio del 0 al 9
  }
  if (validarLuhn(numero)) {
    // Verificar si el número generado cumple con el algoritmo de Luhn
    return numero;
  } else {
    return generarNumeroVisa(); // Si el número no cumple con el algoritmo de Luhn, generar uno nuevo
  }
}

// Función para validar el algoritmo de Luhn
function validarLuhn(numero) {
  let suma = 0;
  let alt = false;
  for (let i = numero.length - 1; i >= 0; i--) {
    let digito = parseInt(numero.charAt(i));
    if (alt) {
      digito *= 2;
      if (digito > 9) {
        digito -= 9;
      }
    }
    alt = !alt;
    suma += digito;
  }
  return suma % 10 == 0;
}

document.getElementById("generar-visa").addEventListener("click", function () {
  var numerovisa = generarNumeroVisa();
  numeroVisaInput.value = numerovisa;
  mensajeVISA.innerHTML = "¡Número de tarjeta VISA generado correctamente!";
});

document.getElementById("copiar-visa").addEventListener("click", function () {
  // Copiar el número de pasaporte al portapapeles
  numeroVisaInput.select();
  document.execCommand("copy");

  // Mostrar un mensaje de confirmación
  mensajeVISA.innerHTML = "¡Número de tarjeta VISA copiado al portapapeles!";
});

// Función para generar un número aleatorio de tarjeta de crédito Mastercard

var numeroMasterInput = document.getElementById("numero-mastercard");
var mensajeMASTER = document.getElementById("mensajeMASTER");

function generarNumeroTarjetaMastercard() {
  var numeros = "0123456789";
  var numeroMastercard = "5";

  // Generar la quinta posición
  numeroMastercard += numeros.charAt(Math.floor(Math.random() * 5));

  // Generar los siguientes catorce dígitos
  for (var i = 0; i < 14; i++) {
    numeroMastercard += numeros.charAt(
      Math.floor(Math.random() * numeros.length)
    );
  }

  // Verificar que el número generado cumple con el algoritmo de Luhn
  if (!validarNumeroTarjeta(numeroMastercard)) {
    // Si el número no cumple con el algoritmo de Luhn, generar uno nuevo
    return generarNumeroTarjetaMastercard();
  }

  return numeroMastercard;
}

// Función para validar si un número de tarjeta de crédito cumple con el algoritmo de Luhn
function validarNumeroTarjeta(numero) {
  // Eliminar espacios en blanco y comprobar que el número de tarjeta es válido
  if (/[^0-9-\s]+/.test(numero)) return false;

  // Eliminar los espacios en blanco y convertir el número de tarjeta en un array
  var numTarjetaArray = numero.replace(/\D/g, "").split("");

  // Verificar que el número de tarjeta tiene al menos 13 dígitos y no más de 16
  if (numTarjetaArray.length < 13 || numTarjetaArray.length > 16) return false;

  var suma = 0;
  var dobleDigito = false;
  for (var i = numTarjetaArray.length - 1; i >= 0; i--) {
    var digito = parseInt(numTarjetaArray[i], 10);

    if (dobleDigito) {
      digito *= 2;
      if (digito > 9) digito -= 9;
    }

    suma += digito;
    dobleDigito = !dobleDigito;
  }

  return suma % 10 == 0;
}

// Event listener para generar y mostrar el número de tarjeta
document
  .getElementById("generar-mastercard")
  .addEventListener("click", function () {
    var numeromaster = generarNumeroTarjetaMastercard();
    numeroMasterInput.value = numeromaster;
    mensajeMASTER.innerHTML =
      "¡Número de tarjeta MASTERCARD generado correctamente!";
  });

// Event listener para copiar el número de tarjeta al portapapeles
document
  .getElementById("copiar-mastercard")
  .addEventListener("click", function () {
    // Seleccionar el número de tarjeta y copiarlo al portapapeles
    numeroMasterInput.select();
    document.execCommand("copy");

    // Mostrar un mensaje de confirmación
    mensajeMASTER.innerHTML =
      "¡Número de tarjeta MASTERCARD copiado al portapapeles!";
  });

/*

  function generarCodigoCVV() {
  // Generar un número de tres dígitos aleatorio para el código CVV
  var codigoCVV = Math.floor(Math.random() * 900) + 100;

  // Generar una fecha de caducidad aleatoria dentro de los próximos 5 años
  var fecha = new Date();
  var anio = fecha.getFullYear() + Math.floor(Math.random() * 5);
  var mes = Math.floor(Math.random() * 12) + 1;
  var dia = Math.floor(Math.random() * 28) + 1; // asumiendo que todos los meses tienen 28 días para simplificar

  // Devolver un objeto con el código CVV y la fecha de caducidad
  return {
    codigoCVV: codigoCVV,
    fechaCaducidad: new Date(anio, mes, dia)
  };
}

function validarCodigoCVV(numeroTarjeta, codigoCVV, fechaCaducidad) {
  // Verificar que el número de tarjeta es válido
  if (!validarNumeroTarjeta(numeroTarjeta)) return false;

  // Verificar que el código CVV tiene tres dígitos
  if (codigoCVV.length !== 3) return false;

  // Verificar que la fecha de caducidad no haya pasado
  var fechaActual = new Date();
  if (fechaCaducidad < fechaActual) return false;

  // Verificar la autenticidad del código CVV
  var ultimosDigitos = numeroTarjeta.substr(-4);
  var codigoGenerado = parseInt(ultimosDigitos + codigoCVV[0] + codigoCVV[1] + codigoCVV[2]);
  var suma = 0;
  var dobleDigito = false;
  for (var i = codigoGenerado.length - 1; i >= 0; i--) {
    var digito = parseInt(codigoGenerado[i], 10);

    if (dobleDigito) {
      digito *= 2;
      if (digito > 9) digito -= 9;
    }

    suma += digito;
    dobleDigito = !dobleDigito;
  }

  return suma % 10 == 0;
}

*/
