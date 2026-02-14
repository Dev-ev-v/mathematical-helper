const visor = document.getElementById("visor");

function calculate(x) {
  visor.value += x;
}

function clearDisplay() {
  visor.value = "";
}

function finish() {
  try {
    visor.value = eval(visor.value);
  } catch {
    visor.value = "Erro";
  }
}
