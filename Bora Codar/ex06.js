var soma = 0;

for (var i = 1; i <= 10; i++) {

    var numero = parseFloat(prompt("Informe o número #" + i + ":"));

    soma += numero;
}

alert("A soma total dos números é: " + soma);
