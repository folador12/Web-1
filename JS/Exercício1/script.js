function somar() {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  let resultado = n1 + n2;
  alert(resultado);
}

function subtrair() {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  let resultado = n1 - n2;
  alert(resultado);
}

function multiplicar() {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  let resultado = n1 * n2;
  alert(resultado);
}

function dividir() {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  let resultado = n1 / n2;
  alert(resultado);
}

function somarIntervalos() {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  let resultado = 0;
  for (let i = n1; i <= n2; i++) {
    resultado += i;
  }
  alert(resultado);
}

function fatorialN1() {
  let n1 = parseInt(document.getElementById("n1").value);
  let resultado = 1;
  for (let i = n1; i > 0; i--) {
    resultado *= i;
  }
  alert(resultado);
}

function listarIntervalos() {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  let resultado = [];
  for (let i = n1; i <= n2; i++) {
    resultado.push(i);
  }
  console.log(resultado);
  document.getElementById("resultado").innerHTML = resultado;
}

function listarPares() {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  let resultado = [];
  for (let i = n1; i <= n2; i++) {
    if (i % 2 == 0) {
      resultado.push(i);
    }
  }
  console.log(resultado);
  document.getElementById("resultado").innerHTML = resultado;
}

function listarMultiplosDe5() {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  let resultado = [];
  for (let i = n1; i <= n2; i++) {
    if (i % 5 == 0) {
      resultado.push(i);
    }
  }
  console.log(resultado);
  document.getElementById("resultado").innerHTML = resultado;
}

function verficarTexto() {
  let texto = document.getElementById("text").value;
  let resultado = "";
  if (texto.length > 10) {
    resultado = "Texto muito longo";
  } else {
    resultado = texto;
  }
  alert(resultado);
}
