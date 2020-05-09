const button1 = document.getElementById("btnSiguiente1")
const textarea1 = document.getElementById("textAreaPedido");
var checkbox1 = document.getElementById('checkbox1');
var fechaHora = document.getElementById("fechaHora");

var fecha = new Date().toISOString().split('T')[0];
var hora = new Date().getHours().toString() + ":" + new Date().getMinutes().toString()
console.log(fecha)
console.log(hora)


document.getElementById("date").setAttribute('min', fecha);

checkbox1.addEventListener("change", validaCheckbox, false);
function validaCheckbox() {
    var checked = checkbox1.checked;
    if (checked) {
        ocultarFechaHora();
        document.getElementById("date").required = false;
        document.getElementById("time").required = false;

    }
    else {
        mostrarFechaHora();
        document.getElementById("date").required = true;
        document.getElementById("time").required = true;

    }
}

button1.addEventListener("click", siguiente1)


function siguiente1() {

    horaActual()


}

function ocultarFechaHora() {
    fechaHora.style.display = "none"
}
function mostrarFechaHora() {
    fechaHora.style.display = "block"
}

function horaActual() {
    if (document.getElementById("time").value <= hora && document.getElementById("time").value != "") {
        document.getElementById("time").value = "";
        alert("Ingrese un horario valido para la entrega")
    }


}


