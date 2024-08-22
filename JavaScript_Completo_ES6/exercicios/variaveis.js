// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
const nation = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
//nation.forEach((item, index) => {
//  console.log(`O Brasil ganhou a copa no ano de ${item}, essa foi a ${index + 1} vez`)
//})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "Uva") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

const newFruit = frutas[frutas.length - 1]
console.log(newFruit)
