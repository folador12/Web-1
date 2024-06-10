const newBtn = document.getElementById("new");

newBtn.addEventListener("click", () => {
  const nomes = document.querySelectorAll("#nome");
  const tels = document.querySelectorAll("#tel");

  if (validateInputs(nomes, tels)) {
    const newDiv = createInputField();
    const form = document.getElementById("contactForm");
    form.appendChild(newDiv);
  } else {
    alert(
      "Nao e possivel adicionar um novo contato deixando os dados do atual em branco!"
    );
  }
});

const createInputField = () => {
  const newDiv = document.createElement("div");
  const labelName = document.createElement("label");
  labelName.textContent = "Nome: ";
  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.id = "nome";
  newDiv.appendChild(labelName);
  newDiv.appendChild(inputName);

  const labelPhone = document.createElement("label");
  labelPhone.textContent = "Telefone: ";
  const inputPhone = document.createElement("input");
  inputPhone.type = "tel";
  inputPhone.id = "tel";
  newDiv.appendChild(labelPhone);
  newDiv.appendChild(inputPhone);

  const deleteBtn = document.createElement("button");
  const img = document.createElement("img");
  img.src = "../../ProfessorFontes/Fontes JavaScript/_Midias/lixeira.png";
  deleteBtn.name = "Excluir";
  deleteBtn.appendChild(img);
  newDiv.appendChild(deleteBtn);

  return newDiv;
};

const validateInputs = (nomes, tels) => {
  for (let i = 0; i < nomes.length; i++) {
    if (nomes[i].value.trim() === "" || tels[i].value.trim() === "") {
      return false;
    }
  }

  return true;
};

document.addEventListener("click", (event) => {
  if (event.target.name === "Excluir") {
    event.target.parentElement.remove();
  }
});
