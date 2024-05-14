let nome = prompt("Digite o seu nome: ");
let diaNascimento = parseInt(prompt("Digite o dia do seu Nascimento: "));
let mesNascimento = parseInt(prompt("Digite o mês do seu Nascimento: "));
let anoNascimento = parseInt(prompt("Digite o ano do seu Nascimento: "));

let dataNascimento = new Date(anoNascimento, mesNascimento - 1, diaNascimento);

let dataAtual = new Date();
let diferenca = dataAtual - dataNascimento;
let diasDeVida = Math.floor(diferenca / (1000 * 60 * 60 * 24));

let texto = `Meu nome é ${nome.toUpperCase()} e nasci em ${dataNascimento.toLocaleDateString()}.
tenho ${diasDeVida} dias de vida.
Nasci na ${
  dataNascimento.getDay() === 0
    ? "Domingo"
    : dataNascimento.getDay() === 1
    ? "Segunda"
    : dataNascimento.getDay() === 2
    ? "Terça"
    : dataNascimento.getDay() === 3
    ? "Quarta"
    : dataNascimento.getDay() === 4
    ? "Quinta"
    : dataNascimento.getDay() === 5
    ? "Sexta"
    : "Sábado"
}.`;

console.log(texto);
document.getElementById("texto").innerHTML = texto;
