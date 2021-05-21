// Crie uma função para verificar se um valor é Truthy

function truthy(value) {
  if (value === true) {
    return true;
  } else if (value !== false) {
    return false;
  }
}

const element_true = document.querySelector(".the_true");

element_true.innerText = truthy(true);

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function quadrado(value_heigth, value_width) {
  return value_heigth * value_width;
}

const element_hg = document.querySelector(".Heigth_and_Width");

element_hg.innerText = quadrado(10, 10);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function name(name, s) {
  return `my name is ${name} ${s}`;
}

const element_name = document.querySelector(".name");

element_name.innerText = name("Jefté", "Rufino");


// Crie uma função que verifica se um número é par

function num_mode(num) {
  if (num % 2 === 0) {
    return `o numero ${num} é par`;
  }else {
    return `o numero ${num} é impar`;
  }
}

function get_num(){
  const element_inp = document.querySelector(".input").value;

  element_mode.innerText = num_mode(element_inp);
}

const element_mode = document.querySelector(".mode");

element_mode.innerText = num_mode(get_num() || 10);



// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

function rolandoLero(){
  const element_rolando = document.querySelector(".rolando");

  element_rolando.innerText = "olando";
}

addEventListener('scroll', rolandoLero);

// Corrija o erro abaixo
const totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

const element_visitante = document.querySelector(".visitante");

element_visitante.innerText = precisoVisitar(20);

