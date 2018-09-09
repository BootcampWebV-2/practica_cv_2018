var selectInput = document.getElementById("selection");
var others = document.getElementById("others");

var menu = document.getElementById("menus");

function showOthers() {
  if (selectInput.value === "others"){
    others.style.display = "block";
    others.focus();
  }
  else {
    others.style.display = "none";
  }
}

function openMenu() {
  menu.style.display = "block";

}

function closeMenu() {
    menu.style.display = "none";
}


var form = document.getElementsByName("contacto")[0];



var observaInput = document.getElementById("observa");





form.addEventListener("submit", function(event) {

  var observaPalabrasUno = observaInput.value.split("\n").join(" ");
  var observaPalabras = observaPalabrasUno.split(" ");
  var observaPalabrasClean = observaPalabras.filter(Boolean);
  var numeroPalabras = observaPalabrasClean.length;


  if (numeroPalabras > 150) {
    alert("El numero de palabras no puede ser superior a 150");
    observaInput.focus();
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