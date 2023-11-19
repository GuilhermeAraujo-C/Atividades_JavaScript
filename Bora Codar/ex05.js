var soma = 0;

for (var i = 1; i <= 10; i++) {
   
    var valor = parseFloat(prompt("Informe o valor #" + i + ":"));

    soma += valor;
}

var media = soma / 10;

alert("Números informados: " + soma + "\nMédia aritmética: " + media);
