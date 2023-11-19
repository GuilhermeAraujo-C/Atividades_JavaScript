var valor1 = prompt("Digite o primeiro valor inteiro:");
var valor2 = prompt("Digite o segundo valor inteiro:");

valor1 = parseInt(valor1);
valor2 = parseInt(valor2);


var operacao = prompt("Escolha a operação desejada:\n1. Adição\n2. Subtração\n3. Divisão\n4. Multiplicação");

operacao = parseInt(operacao);

switch (operacao) {
    case 1:
        alert("Resultado da Adição: " + (valor1 + valor2));
        break;
    case 2:
        alert("Resultado da Subtração: " + (valor1 - valor2));
        break;
    case 3:
        
        if (valor2 !== 0) {
            alert("Resultado da Divisão: " + (valor1 / valor2));
        } else {
            alert("Não é possível dividir por zero.");
        }
        break;
    case 4:
        alert("Resultado da Multiplicação: " + (valor1 * valor2));
        break;
    default:
        alert("Opção inválida. Por favor, escolha uma operação válida.");
}
