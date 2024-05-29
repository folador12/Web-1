function validaForm1() {
  let var1 = document.forms["form1"]["name"].value;
  if (var1 == "") {
    alert("o campo nome não pode estar vazio.");
    return false;
  }
  let var2 = document.forms["form1"]["cpf"].value;
  if (isNaN(var2) || var2.length < 11 || var2.length > 11) {
    alert("o campo idade deve ter algum CPF válido com 11 digitos.");
    return false;
  }
}

document.getElementById("numero").innerHTML = 0;

function contagem() {
  var cont = document.getElementById("contador").value;
  document.getElementById("numero").innerHTML = cont.length;
}

function gerar() {
  let str = document.getElementById("texto").value.trim();
  let palavras = str.split(" ").filter(Boolean);

  console.log(palavras);

  if (palavras.length < 3) {
    alert("Por favor, insira mais de duas palavras.");
  } else if (palavras.length >= 3) {
    let divResultado = document.querySelector(".resultado");
    divResultado.innerHTML = "";

    palavras.map((palavra) => {
      let input = document.createElement("input");
      input.value = palavra;
      input.disabled = true;
      divResultado.appendChild(input);
    });
  }
}

function validaForm2() {
  let var1 = document.forms["form2"]["nome"].value;
  if (var1 == "" || var1 == " " || var1.length > 40) {
    alert(
      "o campo texto não pode estar vazio e não pode ter mais de 40 caracteres."
    );
    return false;
  }

  let dataNascimento = document.forms["form2"]["nascimento"].value;
  if (dataNascimento === "") {
    alert("O campo Data de Nascimento não pode ser vazio.");
    return false;
  }

  let anoNascimento = new Date(dataNascimento).getFullYear();
  let anoAtual = new Date().getFullYear();
  if (anoNascimento < 1910 || anoNascimento > anoAtual) {
    alert(
      "O ano de nascimento não pode ser menor que 1910 nem superior ao ano atual."
    );
    return false;
  }

  let var3 = parseInt(document.forms["form2"]["filhos"].value);
  if (isNaN(var3) || var3 < 1 || var3 > 99) {
    alert("O campo 'Quantidade de Filhos' deve ser um número entre 1 e 99.");
    return false;
  }
}
