var golsCorinthians = prompt("Digite o número de gols marcados pelo Corinthians:");

golsCorinthians = parseInt(golsCorinthians);

var golsPalmeiras = prompt("Digite o número de gols marcados pelo Palmeiras:");

golsPalmeiras = parseInt(golsPalmeiras);

if (golsCorinthians > golsPalmeiras) {
    alert("O Corinthians é o vencedor!");
} else if (golsPalmeiras > golsCorinthians) {
    alert("O Palmeiras é o vencedor!");
} else {
    alert("EMPATE! Não houve vencedor.");
}
