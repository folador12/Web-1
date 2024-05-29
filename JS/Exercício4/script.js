document.getElementById("titulo1").innerHTML = "Meu nome é Alex";

document.getElementsByClassName("minha-div")[0].style =
  "height: 40px; border: 1px solid black; background-color: red;";
document.getElementsByClassName("minha-div")[1].style =
  "height: 40px; background-color: blue;";
document.getElementsByClassName("minha-div")[2].style =
  "height: 40px; background-color: yellow;";

document.getElementsByTagName("img")[0].src =
  "https://img.quizur.com/f/img5d9bb85a421270.64191543.jpg?lastEdited=1570486366";
document.getElementsByTagName("img")[0].alt = "Vampeta pelado";
document.getElementsByTagName("img")[0].title = "Vampeta pelado";
document.getElementsByTagName("img")[0].width = "500";

const mudaCorTexto = (idElemento, cor) => {
  document.getElementById(idElemento).style.color = cor;
};

mudaCorTexto("texto-1", "green");
mudaCorTexto("link-1", "blue");

function addRed(elemento) {
  elemento.style.backgroundColor = "red";
}

function addWhite(elemento) {
  elemento.style.backgroundColor = "white";
}

function trocaCor(elemento) {
  let cor = elemento.style.backgroundColor;
  if (cor == "blue") {
    elemento.style.backgroundColor = "gray";
  } else {
    elemento.style.backgroundColor = "blue";
  }
}

function criaQuadrado() {
  let d = document.createElement("div");
  d.setAttribute("class", "quadrado");
  document.getElementById("quadrados").appendChild(d);
}

function contaLetras(textarea) {
  let qtd = textarea.value.length;
  let span = textarea.nextElementSibling;
  span.innerHTML = qtd + (qtd <= 1 ? " caracter" : " caracteres");
}
function mudaBorda(elemento, cor) {
  elemento.style.borderColor = cor;
}
