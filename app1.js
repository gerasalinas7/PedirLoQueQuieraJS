
document.getElementById("btnMapa").addEventListener("click", mostrarMapa)
document.getElementById("btnManual").addEventListener("click", mostrarManual)

function mostrarMapa() {
    document.getElementById("showMapa").style.display = "block"
    document.getElementById("showManual").style.display = "none"
}
function mostrarManual() {
    document.getElementById("showMapa").style.display = "none"
    document.getElementById("showManual").style.display = "block"
}
