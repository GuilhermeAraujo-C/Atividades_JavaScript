var valor1 = parseFloat(prompt("Informe o primeiro valor:"));

var valor2 = parseFloat(prompt("Informe o segundo valor:"));

var valor3 = parseFloat(prompt("Informe o terceiro valor:"));

if (valor1 > valor2 && valor1 > valor3) {
    alert("O maior valor é: " + valor1);
} else if (valor2 > valor1 && valor2 > valor3) {
    alert("O maior valor é: " + valor2);
} else {
    alert("O maior valor é: " + valor3);
}
