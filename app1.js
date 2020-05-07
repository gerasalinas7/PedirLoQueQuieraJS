
document.getElementById("btnMapa").addEventListener("click", mostrarMapa)
document.getElementById("btnManual").addEventListener("click", mostrarManual)

function mostrarMapa() {
    document.getElementById("showMapa").style.display = "block"
    document.getElementById("showManual").style.display = "none"

    document.getElementById("inputciudad").required = false;
    document.getElementById("inputcalle").required = false;
    document.getElementById("inputnumero").required = false;

}
function mostrarManual() {
    document.getElementById("showMapa").style.display = "none"
    document.getElementById("showManual").style.display = "block"

    document.getElementById("inputciudad").required = true;
    document.getElementById("inputcalle").required = true;
    document.getElementById("inputnumero").required = true;
}
