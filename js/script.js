const cpfs = document.querySelectorAll(".cpf li");

function elementsInnerText(elements) {
  const arrayElements = Array.from(elements);

  return arrayElements.map((element) => {
    return element.innerText;
  });
}

console.log(elementsInnerText(cpfs));
