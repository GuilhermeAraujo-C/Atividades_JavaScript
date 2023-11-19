var somaMenorQue72 = 0;

var numerosInformados = "";

for (var i = 1; i <= 6; i++) {
    
    var numero = parseFloat(prompt("Informe o número #" + i + ":"));

    numerosInformados += numero + ", ";

    if (numero < 72) {
        somaMenorQue72 += numero;
    }
}

alert("Números informados: " + numerosInformados + "\nSoma dos números menores que 72: " + somaMenorQue72);
