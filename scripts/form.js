var form = document.getElementById("contact");

//- Formulario
var nombreInput = document.getElementById("nombre");

var emailInput = document.getElementById("email");

var numeroInput = document.getElementById("numero");
var mensajeErrorTel = document.getElementById("mensajeErrorTel");

var selectInput = document.getElementById("selection");
var others = document.getElementById("others");


var mensajeInput = document.getElementById("mensaje");
var mensajeError = document.getElementById("mensajeError");

var submitButton = document.getElementById("enviar");

//- Menu Mobile
var menu = document.getElementById("menus");


//- Formulario
function showOthers() {
  if (selectInput.value === "others") {
    others.style.display = "block";
    others.focus();
  }
  else {
    others.style.display = "none";
  }
}

//- Menu Mobile
function openMenu() {
  menu.style.display = "block";
}

function closeMenu() {
    menu.style.display = "none";
}

form.addEventListener("submit", function(event) {

  if (nombreInput.checkValidity() === false) {
    alert("Tienes que escribir tu nombre");
    nombreInput.focus();
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

  var regex1=/^([0-9]+){9}$/;
  var numeroValidation1 = regex1.test(numeroInput.value);

  if (numeroValidation1 === false){
    //alert("Tienes que escribir un numero correcto");
    mensajeErrorTel.style.display = "block";
    numeroInput.focus();
    event.preventDefault();
    return false;
  }

  var mensajePalabrasUno = mensajeInput.value.split("\n").join(" ");
  var mensajePalabras = mensajePalabrasUno.split(" ");
  var mensajePalabrasClean = mensajePalabras.filter(Boolean);
  var numeroPalabras = mensajePalabrasClean.length;


  if (numeroPalabras > 150) {
    //alert("El numero de palabras no puede ser superior a 4");
    mensajeError.style.display = "block";
    mensajeInput.focus();
    event.preventDefault();
    return false;
  }


  submitButton.setAttribute("disabled", "");
  event.preventDefault();


  setTimeout(function() {
    form.reset();
    sendNotification("Formulario recibido", "Gracias por contactar");
    submitButton.removeAttribute("disabled");
  }, 1000);

});














