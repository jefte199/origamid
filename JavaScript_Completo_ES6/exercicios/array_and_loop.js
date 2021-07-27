// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

const arrayCopa = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

const elementCopa = document.querySelector('.copa');

let sucess = ``;

arrayCopa.forEach((i) => sucess = `${sucess}-${i}`);

elementCopa.innerHTML = `Brasil ganhou a copa nos anos de ${sucess}`;

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

let Mymsg = ``;

for(let i = 0; i < frutas.length; i++) {
  Mymsg = `${Mymsg} ${frutas[i]}`
  if(frutas[i] === 'Pera')break;
};

const elementFruits = document.querySelector('.fruits');

elementFruits.innerHTML = `Nossas frutas - ${Mymsg}`;

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

const ultmat = frutas[frutas.length - 1];

const elementUltmat = document.querySelector('.ultmat');

elementUltmat.innerHTML = ultmat;