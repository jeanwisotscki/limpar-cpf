const cpfs = document.querySelectorAll(".cpf li");

const elementsInnerText = ([...elements]) => {
  return elements.map((element) => element.innerText);
};

console.log(elementsInnerText(cpfs));
