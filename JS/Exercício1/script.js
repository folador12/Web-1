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

function listar(tipo) {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  let resultado = [];

  if (tipo == "par") {
    for (let i = n1; i <= n2; i++) {
      if (i % 2 == 0) {
        resultado.push(i);
      }
    }
  } else if (tipo == "multiplo5") {
    for (let i = n1; i <= n2; i++) {
      if (i % 5 == 0) {
        resultado.push(i);
      }
    }
  } else if (tipo == "intervalo") {
    for (let i = n1; i <= n2; i++) {
      resultado.push(i);
    }
  }

  console.log(resultado);
  document.getElementById("resultado").innerHTML = resultado;
}

function calcular(tipo) {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  let resultado = 0;

  if (tipo == "soma") {
    resultado = n1 + n2;
  } else if (tipo == "subtracao") {
    resultado = n1 - n2;
  } else if (tipo == "multiplicacao") {
    resultado = n1 * n2;
  } else if (tipo == "divisao") {
    resultado = n1 / n2;
  } else if (tipo == "intervalo") {
    resultado = 0;
    for (let i = n1; i <= n2; i++) {
      resultado += i;
    }
  } else if (tipo == "fatorial") {
    resultado = 1;
    for (let i = n1; i > 0; i--) {
      resultado *= i;
    }
  }

  alert(resultado);
}
