const btnEncrypt = document.getElementById("btn-encry");
const btnDecrypt = document.getElementById("btn-descry");
const btnCopy = document.getElementById("btn-copy");
var txtResultado = document.getElementById("txt-result");

var styleTxtResult = document.querySelector(".txt-result");
var styleBtnCopyTxt = document.querySelector(".btn-copy-txt");

var styleImg = document.querySelector(".container-img");
var styleTxtNotFound = document.querySelector(".container-txt-no-found");
var styleTxt = document.querySelector(".container-txt");

btnEncrypt.onclick = encriptar();

function encriptar(texto) {
  return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

function desencriptar(texto) {
  return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function encriptarTexto() {
  let textarea = document.getElementById("inputText");
  txtResultado.textContent = encriptar(textarea.value);
  styleTxtResult.style.display = "block";
  styleBtnCopyTxt.style.display = "block";

  styleImg.style.display = "none";
  styleTxtNotFound.style.display = "none";
  styleTxt.style.display = "none";
}

function desencriptarTexto() {
  let textarea = document.getElementById("inputText");
  txtResultado.textContent = desencriptar(textarea.value);
  styleTxtResult.style.display = "block";
  styleBtnCopyTxt.style.display = "block";

  styleImg.style.display = "none";
  styleTxtNotFound.style.display = "none";
  styleTxt.style.display = "none";
}

function copiarTexto() {
  const textoACopiar = txtResultado.textContent;
  navigator.clipboard.writeText(textoACopiar);
}
