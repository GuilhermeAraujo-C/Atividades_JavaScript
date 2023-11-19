var valor = prompt("Informe um valor:");

valor = parseFloat(valor);

if (valor > 0) {
    alert("O valor informado é positivo.");
} else if (valor < 0) {
    alert("O valor informado é negativo.");
} else {
    alert("O valor informado é zero.");
}
