const matriz = [1, 2, 3];

const objeto = [
  {
    nome: "João",
    idade: 50,
  },
  {
    nome: "Ana",
    idade: 23,
  },
];

document.getElementById("matriz").innerHTML = matriz;
document.getElementById("objeto").innerHTML = objeto.length;

const buttonMatriz = document.getElementById("buttonMatriz");

buttonMatriz.addEventListener("click", inserirMatriz);

const buttonObject = document.getElementById("buttonObject");

buttonObject.addEventListener("click", inserirObjeto);

function inserirMatriz(event) {
  event.preventDefault();
  let campo = parseInt(document.getElementById("campo").value);

  matriz.push(campo);

  document.getElementById("matriz").innerHTML = matriz;
}

function inserirObjeto(event) {
  event.preventDefault();
  let nome = document.getElementById("nome").value;
  let idade = parseInt(document.getElementById("idade").value);

  objeto.push({ nome: nome, idade: idade });

  document.getElementById("objeto").innerHTML = objeto.length;
}
