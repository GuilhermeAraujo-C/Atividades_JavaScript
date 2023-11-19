var numeroDeLados = prompt("Digite o número de lados do polígono (3, 4 ou 5):");

numeroDeLados = parseInt(numeroDeLados);

switch (numeroDeLados) {
    case 3:
        var medidaDoLado = prompt("Digite a medida do lado do triângulo (em cm):");
        var perimetro = 3 * parseFloat(medidaDoLado);
        alert("TRIÂNGULO\nPerímetro: " + perimetro.toFixed(2) + " cm");
        break;
    case 4:
        var medidaDoLado = prompt("Digite a medida do lado do quadrado (em cm):");
        var area = parseFloat(medidaDoLado) * parseFloat(medidaDoLado);
        alert("QUADRADO\nÁrea: " + area.toFixed(2) + " cm²");
        break;
    case 5:
        alert("PENTÁGONO");
        break;
    default:
        if (numeroDeLados < 3) {
            alert("NÃO É UM POLÍGONO");
        } else {
            alert("POLÍGONO NÃO IDENTIFICADO");
        }
}
