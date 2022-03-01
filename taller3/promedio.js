const lista1 = [
    100,
    200,
    300,
    500
];



function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, elementoActual){
            return valorAcumulado + elementoActual
        }
    )
    const promedioLista = sumaLista / lista.length
    return promedioLista
}