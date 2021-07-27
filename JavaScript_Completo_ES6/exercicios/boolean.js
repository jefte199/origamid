// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

const element_old = document.querySelector(".old");

const my = 24;
const your = 20;

let msg = '';

my > your ? msg = "Sou Mais Velho": msg = "As Suas Ordens milaide";

element_old.innerHTML = msg;

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

const boo_resul = document.querySelector(".boo_resul");

boo_resul.innerText = expressao;



// O que irá aparecer no console?
const boo = document.querySelector(".boo");

if(('Gato' === 'gato') || (5 > 2)) {
  boo.innerText = 'Gato' || 'Cão';
} else {
  boo_resul.innerText = "False";
}