// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

function id(an_old, an) {
  return an - an_old;
}

let pessoa = {
  sexo: "h",
  name: "Jefté",
  sobrenome: "Rufino",
  age() {
    const an_old = 1996;
    const an = 2021;
    return id(an_old, an);
  },
}


const element_pessoa = document.querySelector(".pessoa");

pessoa.type = element_pessoa.innerText;

element_pessoa.innerText = `name: ${pessoa.name}`;

// Crie um método no objeto anterior, que mostre o seu nome completo

const element_age = document.querySelector(".age");

element_age.innerText = pessoa.age();

// Modifique o valor da propriedade preco para 3000

var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3008;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

let dog = {
  type: "labrador",
  color: "preto",
  late() {
    if ("h" === pessoa.sexo){
      return "AU AU Hombre"
    }else {
      return "oi girl"
    }
  },
}
