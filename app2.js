document.getElementById("btnTarjeta").addEventListener("click", mostrarTarjeta)
document.getElementById("btnEfectivo").addEventListener("click", mostrarEfectivo)

function mostrarTarjeta() {
    document.getElementById("pagoTarjeta").style.display = "block"
    document.getElementById("pagoEfectivo").style.display = "none"



}
function mostrarEfectivo() {
    document.getElementById("pagoTarjeta").style.display = "none"
    document.getElementById("pagoEfectivo").style.display = "block"

}
