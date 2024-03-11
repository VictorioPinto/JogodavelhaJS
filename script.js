const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
const div5 = document.getElementById("div5");
const div6 = document.getElementById("div6");
const div7 = document.getElementById("div7");
const div8 = document.getElementById("div8");
const div9 = document.getElementById("div9");

const vitoria = document.getElementById("vitoria");

const resta = document.getElementById("restart");

let contador = 0;

vitoria.textContent = "Vez do X jogar";
for (let i = 1; i <= 9; i++) {
  const currentDiv = document.getElementById(`div${i}`);
  currentDiv.addEventListener("click", () => {
    if (contador % 2 === 0) {
      currentDiv.textContent = "X";
      vitoria.textContent = "Vez do O jogar";
    } else {
      currentDiv.textContent = "O";
      vitoria.textContent = "Vez do X jogar";
    }
    contador++;
    currentDiv.style.pointerEvents = "none";
    calcular();
  });
}

function calcular() {
  if (
    (div1.textContent === "X" &&
      div2.textContent === "X" &&
      div3.textContent === "X") ||
    (div4.textContent === "X" &&
      div5.textContent === "X" &&
      div6.textContent === "X") ||
    (div7.textContent === "X" &&
      div8.textContent === "X" &&
      div9.textContent === "X")
  ) {
    vitoriaX();
  }

  if (
    (div1.textContent === "X" &&
      div4.textContent === "X" &&
      div7.textContent === "X") ||
    (div2.textContent === "X" &&
      div5.textContent === "X" &&
      div8.textContent === "X") ||
    (div3.textContent === "X" &&
      div6.textContent === "X" &&
      div9.textContent === "X")
  ) {
    vitoriaX();
  }

  if (
    (div1.textContent === "X" &&
      div5.textContent === "X" &&
      div9.textContent === "X") ||
    (div3.textContent === "X" &&
      div5.textContent === "X" &&
      div7.textContent === "X")
  ) {
    vitoriaX();
  }

  if (
    (div1.textContent === "O" &&
      div2.textContent === "O" &&
      div3.textContent === "O") ||
    (div4.textContent === "O" &&
      div5.textContent === "O" &&
      div6.textContent === "O") ||
    (div7.textContent === "O" &&
      div8.textContent === "O" &&
      div9.textContent === "O")
  ) {
    vitoriaO();
  }

  if (
    (div1.textContent === "O" &&
      div4.textContent === "O" &&
      div7.textContent === "O") ||
    (div2.textContent === "O" &&
      div5.textContent === "O" &&
      div8.textContent === "O") ||
    (div3.textContent === "O" &&
      div6.textContent === "O" &&
      div9.textContent === "O")
  ) {
    vitoriaO();
  }

  if (
    (div1.textContent === "O" &&
      div5.textContent === "O" &&
      div9.textContent === "O") ||
    (div3.textContent === "O" &&
      div5.textContent === "O" &&
      div7.textContent === "O")
  ) {
    vitoriaO();
  }

  if (
    div1.textContent !== "" &&
    div2.textContent !== "" &&
    div3.textContent !== "" &&
    div4.textContent !== "" &&
    div5.textContent !== "" &&
    div6.textContent !== "" &&
    div7.textContent !== "" &&
    div8.textContent !== "" &&
    div9.textContent !== ""
  ) {
    empate();
  }
}

function vitoriaX() {
  vitoria.textContent = "vitoria do X";
  desabilitar();
}
function vitoriaO() {
  vitoria.textContent = "vitoria do O";
  desabilitar();
}
function empate() {
  vitoria.textContent = "Empate";
  desabilitar();
}
function desabilitar() {
  for (let i = 1; i <= 9; i++) {
    divs = document.getElementById(`div${i}`);
    divs.style.pointerEvents = "none";
  }
}
function restart() {
  for (let i = 1; i <= 9; i++) {
    divs = document.getElementById(`div${i}`);
    divs.style.pointerEvents = "auto";
    divs.textContent = "";
  }
  contador = 0;
}
resta.addEventListener("click", () => {
  restart();
});
