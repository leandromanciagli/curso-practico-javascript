const precioOriginal = 100
const descuento = 18

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100
    return precioConDescuento
}

function onClickButtonPriceDiscount() {
    const priceValue = document.getElementById("inputPrice").value
    const discountValue = document.getElementById("inputDiscount").value
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue)
    result = document.getElementById("result")
    result.innerText = "El precio con descuento es: " + precioConDescuento
}

