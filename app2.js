document.getElementById("btnTarjeta").addEventListener("click", mostrarTarjeta)
document.getElementById("btnEfectivo").addEventListener("click", mostrarEfectivo)

function mostrarTarjeta() {
    document.getElementById("pagoTarjeta").style.display = "block"
    document.getElementById("pagoEfectivo").style.display = "none"
    document.getElementById("inputEfectivo").required = false;

    document.getElementById("card_number").required = true;
    document.getElementById("expiry_month").required = true;
    document.getElementById("expiry_year").required = true;
    document.getElementById("cvv").required = true;
    document.getElementById("name_on_card").required = true;

}
function mostrarEfectivo() {
    document.getElementById("pagoTarjeta").style.display = "none"
    document.getElementById("pagoEfectivo").style.display = "block"
    document.getElementById("inputEfectivo").required = true;

    document.getElementById("card_number").required = false;
    document.getElementById("expiry_month").required = false;
    document.getElementById("expiry_year").required = false;
    document.getElementById("cvv").required = false;
    document.getElementById("name_on_card").required = false;



}
var cardNum = document.getElementById("card_number").value;
var cardName = document.getElementById("name_on_card").value;
var expMonth = document.getElementById("expiry_month").value;
var expYear = document.getElementById("expiry_year").value;
var cvv = document.getElementById("cvv").value;

var regName = /^[a-z ,.'-]+$/i;
var regMonth = /^01|02|03|04|05|06|07|08|09|10|11|12$/;
var regYear = /^2020|2021|2022|2023|2024|2025|2026|2027|2028|2029|2030|2031$/;
var regCVV = /^[0-9]{3,3}$/;

var regexNum = /^(?:4\d{3})([-\s]?)\d{4}\1\d{4}\1\d{3,4}$/; // 16 digitos o de 4 en 4 separados por espacios.

function validacion() {
    if (!regexNum.test(document.getElementById("card_number").value) && document.getElementById("card_number").required == true) {
        // Si no se cumple la condicion...
        alert('[ERROR NUMERO TARJETA] El campo numero de tarjeta es invalido');
        document.getElementById("card_number").value = ""
    }
    else if (!regMonth.test(document.getElementById("expiry_month").value) && document.getElementById("expiry_month").required == true) {
        // Si no se cumple la condicion...
        alert('[ERROR MES VENCIMIENTO] El campo mes debe tener un valor entre 01 y 12');
        document.getElementById("expiry_month").required = true;
        document.getElementById("expiry_month").value = ""
    }
    else if (!regYear.test(document.getElementById("expiry_year").value) && document.getElementById("expiry_year").required == true) {
        // Si no se cumple la condicion...
        alert('[ERROR AÑO VENCIMIENTO]  El campo año debe tener un valor mayor a 2019');
        document.getElementById("expiry_year").required = true;
        document.getElementById("expiry_year").value = ""
    }
    else if (document.getElementById("expiry_year").value == "2020" && document.getElementById("expiry_month").value < 6) {
        alert('[ERROR MES VENCIMIENTO]  El campo año debe tener un valor mayor al mes de mayo');
        document.getElementById("expiry_month").required = true;
        document.getElementById("expiry_month").value = ""
    }
    else if (!regCVV.test(document.getElementById("cvv").value) && document.getElementById("cvv").required == true) {
        // Si no se cumple la condicion...
        alert('[ERROR CVV] El campo CVV debe tener un valor numerico de 3 cifras');
        document.getElementById("cvv").required = true;
        document.getElementById("cvv").value = ""
    }
    else if (!regName.test(document.getElementById("name_on_card").value) && document.getElementById("name_on_card").required == true) {
        // Si no se cumple la condicion...
        alert('[ERROR TITULAR] El campo titular debe tener solo letras');
        document.getElementById("name_on_card").required = true;
        document.getElementById("name_on_card").value = ""
    }

}

document.getElementById("confirm").addEventListener("click", validacion)