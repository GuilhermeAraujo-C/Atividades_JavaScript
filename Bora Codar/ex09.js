var anoAtual = new Date().getFullYear();

var anoNascimento = parseInt(prompt("Informe o ano de nascimento:"));

var idade = anoAtual - anoNascimento;

if (idade >= 16) {
    alert("Você pode votar este ano!");
} else {
    alert("Você não pode votar este ano. Precisa ter pelo menos 16 anos.");
}
