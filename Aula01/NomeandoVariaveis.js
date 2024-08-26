// Como devs, o que mais fazemos é LER código!
// Contexto é extremamente importante!
const userFirstInputNumber = 10;
const userSecondInputNumber = 10; //devemos explicar o porque/para que

console.log(userFirstInputNumber + userSecondInputNumber);

// ======================
var inputDoUsuario;

// No Browser
// - string
// - elemento do DOM (Campo de busca do google)
const inputUsuario = document.querySelector("input").value;
const $inputUsuario = document.querySelector("input"); //indica que é um elemento do DOM

// Booleanos
// <input value="" />
document.querySelector("input").hasAttribute("value"); // true | false
// has, is (indica que são comparações boleanas)
if (hasSomething || isAnything) {
  //"é isso ou é aquilo"
}
if (!hasSomething) {
  // não há necessidade do uso de 'else'
}

// should
if (shouldOpen) {
}
