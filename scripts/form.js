$(document).ready(function() {
  // Otros
  $('input[type="radio"]').click(function() {
    if ($(this).attr("id") === "value_others") {
      $("#inputOther").show();
    } else {
      $("#inputOther").hide();
    }
  });

  // Contar
  $("#counter").on("keyup", function() {
    var words = this.value.match(/\S+/g).length;

    if (words > 150) {
      var trimmed = $(this)
        .val()
        .split(/\s+/, 150)
        .join(" ");
      $(this).val(trimmed + " ");
    } else {
      $("#counter__visible").text(words);
      $("#word_left").text(150 - words);
    }
  });
});

var form = document.getElementsByName("contact")[0];

var nombreInput = document.getElementById("nombre");
var apellidosInput = document.getElementById("apellidos");
var emailInput = document.getElementById("email");
var numeroInput = document.getElementById("phone");
var valueInput = {
  value1: document.getElementById("value_1"),
  value2: document.getElementById("value_2"),
  value3: document.getElementById("value_3"),
  value4: document.getElementById("value_others")
};
var submitButton = document.getElementById("enviar");

form.addEventListener("submit", function(event) {
  if (nombreInput.checkValidity() === false) {
    alert("Tienes que escribir tu nombre");
    nombreInput.focus();
    event.preventDefault();
    return false;
  }

  if (apellidosInput.checkValidity() === false) {
    alert("Tienes que escribir tus apellidos");
    apellidosInput.focus();
    event.preventDefault();
    return false;
  }

  var regex = /[A-Za-z0-9\.\+]+@[A-Za-z0-9]+\.[A-Za-z0-9\.]+/;
  var resultEmailValidation = regex.test(emailInput.value);

  if (resultEmailValidation === false) {
    alert("Tienes que escribir un email correcto");
    emailInput.focus();
    event.preventDefault();
    return false;
  }

  var regexNumber = /^\+[0-9\{2}]+ [0-9\{9}]/;
  var resultNumberValidation = regexNumber.test(numeroInput.value);

  if (resultNumberValidation === false) {
    alert("Tienes que escribir un número de teléfono correcto");
    numeroInput.focus();
    event.preventDefault();
    return false;
  }

  if (valueInput.value1.checkValidity() === false) {
    alert("Tienes que seleccionar como nos has conocido");
    event.preventDefault();
    return false;
  }

  //submitButton.setAttribute("disabled", "");
  event.preventDefault();
  createData();

  // setTimeout(function() {
  //   createData();
  //   form.reset();
  //   //sendNotification("Formulario recibido", "Gracias por participar");

  //   submitButton.removeAttribute("disabled");
  // }, 1000);
});

var recibir = document.getElementById("recibir");
recibir.addEventListener("click", function() {
  getData();
});

function Datosformulario(nombre, apellidos, email, telefono) {
  this.nombre = nombre;
  this.apellidos = apellidos;
  this.email = email;
  this.telefono = telefono;
}
