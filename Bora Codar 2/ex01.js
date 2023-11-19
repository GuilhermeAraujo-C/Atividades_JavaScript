var quantidadeDeMaca = prompt("Quantas maçãs você deseja comprar?");

quantidadeDeMaca = parseInt(quantidadeDeMaca);

if (quantidadeDeMaca >= 12) {
    
    var precoPorMaca = 2.50;
} else {

    var precoPorMaca = 3.50;
}

var valorTotal = quantidadeDeMaca * precoPorMaca;

alert("O valor total da compra é R$ " + valorTotal.toFixed(2));
