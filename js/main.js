function somar() {
  let numero1 = Number(document.getElementById("valor1").value);
  let numero2 = Number(document.getElementById("valor2").value);
  let resultado = numero1 + numero2;
  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function diminuir() {
  let numero1 = Number(document.getElementById("valor1").value);
  let numero2 = Number(document.getElementById("valor2").value);
  let resultado = numero1 - numero2;
  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function multiplicacao() {
  let numero1 = Number(document.getElementById("valor1").value);
  let numero2 = Number(document.getElementById("valor2").value);
  let resultado = numero1 * numero2;
  document.getElementById("resultado").innerText = "Resultado: " + resultado.toFixed(2);
}

function divisao() {
  let numero1 = Number(document.getElementById("valor1").value);
  let numero2 = Number(document.getElementById("valor2").value);
  let resultado = numero1 / numero2;
  document.getElementById("resultado").innerText = "Resultado: " + resultado.toFixed(2)
}

function potencia() {
  let numero1 = Number(document.getElementById("valor1").value);
  let numero2 = Number(document.getElementById("valor2").value);
  let resultado = numero1 ** numero2;
  document.getElementById("resultado").innerText = "Resultado: " + resultado.toFixed(2);
}

function resto() {
  let numero1 = Number(document.getElementById("valor1").value);
  let numero2 = Number(document.getElementById("valor2").value);
  let resultado = numero1 % numero2;
  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}