// nomeie 3 propriedades ou métodos de strings

// nomeie 5 propriedades ou métodos de elementos do DOM

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

const replace = document.querySelector(".input01").value;

function get_string() {
  console.log(replace.toLocaleLowerCase());
  console.log(replace.replace('e', 'a'));
}