const result = document.getElementById("btnResult")
const painel = document.getElementById("porcentagemPainel")
const type = document.getElementById("porcentagemType")

result.addEventListener("click", () => {
  const n1 = parseFloat(document.getElementById("btnNumber1").value);
  const n2 = parseFloat(document.getElementById("btnNumber2").value);

  if (isNaN(n1) || isNaN(n2)) {
    painel.textContent = "Digite números válidos.";
    return;
  }

  let resposta;

  if (type.value === "Modelo 1") {
    // Ex: 60% de 360
    resposta = (n1 / 100) * n2;
    painel.textContent = `${n1}% de ${n2} = ${resposta}`;
  } else {
    // Ex: 80 em 1050 → qual porcentagem?
    resposta = (n1 / n2) * 100;
    painel.textContent = `${n1} representa ${resposta.toFixed(2)}% de ${n2}`;
  }
});
