const listaCPFS = document.querySelectorAll(".cpf li");
const btnFormatar = document.querySelector("#btn-formatar");

const elementsInnerText = ([...elements]) => {
  return elements.map((element) => element.innerText);
};

const limparCPF = (cpf) => cpf.replace(/\D/g, "");

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
};

const formatarCPFS = (cpfs) => {
  return cpfs.map(limparCPF).map(construirCPF);
};

const substituiCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormatados = formatarCPFS(cpfs);

  btnFormatar.addEventListener("click", () => {
    cpfsElements.forEach((element, index) => {
      element.innerText = cpfsFormatados[index];
    });
  });
};

substituiCPFS(listaCPFS);
