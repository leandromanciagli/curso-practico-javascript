// Código del Cuadrado 

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}


// Código del Triángulo

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function alturaTrianguloIsosceles(lado1, base) {
    return Math.sqrt(Math.pow(lado1, 2) - (Math.pow(base, 2) / 4))
}

function esIsosceles(lado1, lado2, base){
    return (lado1 == lado2) || (lado1 == base) || (lado2 == base) 
}


// Código del Círculo

const PI = Math.PI

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI
}

function calcularPerimetroCuadrado() {
    const lado = parseFloat(document.getElementById("inputCuadrado").value)
    const perimetro = perimetroCuadrado(lado);
    alert("El perímetro del cuadrado es: " + perimetro + "cm")
}

function calcularAreaCuadrado() {
    const lado = parseFloat(document.getElementById("inputCuadrado").value)
    const area = areaCuadrado(lado);
    alert("El área del cuadrado es: " + area + "cm2")
}

function calcularPerimetroTriangulo() {
    const lado1 = parseFloat(document.getElementById("inputTrianguloLado1").value)
    const lado2 = parseFloat(document.getElementById("inputTrianguloLado2").value)
    const base = parseFloat(document.getElementById("inputTrianguloBase").value)
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert("El perímetro del triángulo es: " + perimetro + "cm")
}

function calcularAreaTriangulo() {
    const base = parseFloat(document.getElementById("inputTrianguloBase").value)
    const altura = parseFloat(document.getElementById("inputTrianguloAltura").value)
    const area = areaTriangulo(base, altura);
    alert("El área del triángulo es: " + area + "cm2")
}

function calcularAlturaTrianguloIsosceles() {
    const lado1 = parseFloat(document.getElementById("inputTrianguloLado1").value)
    const lado2 = parseFloat(document.getElementById("inputTrianguloLado2").value)
    const base = parseFloat(document.getElementById("inputTrianguloBase").value)
    if(esIsosceles(lado1, lado2, base)) {
        const altura = alturaTrianguloIsosceles(lado1, lado2, base);
        alert("La altura del triángulo es: " + altura + "cm")
    }else {
        alert("El triángulo no es isósceles")
    }
}

function calcularPerimetroCirculo() {
    const radio = parseFloat(document.getElementById("inputCirculo").value)
    const perimetro = perimetroCirculo(radio);
    alert("El perímetro del círculo es: " + perimetro + "cm")
}

function calcularAreaCirculo() {
    const radio = parseFloat(document.getElementById("inputCirculo").value)
    const area = areaCirculo(radio);
    alert("El área del círculo es: " + area + "cm2")
}
