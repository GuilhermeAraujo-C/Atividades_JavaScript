var valor1 = parseFloat(prompt("Informe o primeiro valor:"));

var valor2 = parseFloat(prompt("Informe o segundo valor:"));

if (valor1 === valor2) {
    alert("Números iguais");
} else if (valor1 > valor2) {
    alert("Primeiro é maior");
} else {
    alert("Segundo é maior");
}
