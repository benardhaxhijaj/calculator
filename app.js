let input = document.getElementById("input");

function addToInput(value) {
  input.value += value;
}

function clearInput() {
  input.value = "";
}

function backDel() {
  input.value = input.value.slice(0, -1);
}

function calculate() {
  let equation = input.value;
  let lastChar = equation[equation.length - 1];

  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "*" ||
    lastChar === "/"
  ) {
    equation = equation.slice(0, -1);
  }

  input.value = eval(equation);
}
