// Inicializa a variável para armazenar a soma dos números
var soma = 0;

// Contador para controlar a quantidade de números válidos
var numerosValidos = 0;
for (var i = 1; i <= 4; i++) {
    var numero = parseFloat(prompt("Informe o número #" + i + ":"));

    if (numero > 0 && numero < 10) {
        soma += numero;
        numerosValidos++;
    } else {
        alert("Número inválido. Informe um número entre 0 e 10.");
        i--;
    }
}

if (numerosValidos === 4) {
    var media = soma / 4;

    if (media > 5) {
        alert("Você passou no teste. Média: " + media);
    } else {
        alert("Tente novamente. Média: " + media);
    }
} else {
    alert("Você não informou a quantidade necessária de números válidos.");
}
