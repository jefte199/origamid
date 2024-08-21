// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const pessoa = {
  name: "Jefté",
  lastName: "Rufino",
  age: 27,
  full: function () { return `I am ${this.name} ${this.lastName} and i am ${this.age} years old` },
}

pessoa.name = "Edvania";
pessoa.age = 21;
console.log(pessoa.full());

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

const dog = {
  name: "rex",
  breed: "labrador",
  age: 4,
  color: "#000",
  al(see) {
    if (see === "homem") {
      return "Latir"
    } else {
      return "dont have"
    }
  }
}

console.log(`dog ${dog.name} ${dog.al('homem')}`)
