// nomeie 3 propriedades ou métodos de strings
/*const name = "Edvania"

console.log(`${name} have ${name.length} caracters`)
console.log(`${name} have ${name[2]}`)
console.log(`${name} have ${name.indexOf("vania")} `)
*/

// nomeie 5 propriedades ou métodos de elementos do DOM
const first_btn_click = document.querySelector(".first_btn_click");
const h1_title = document.querySelector(".h1_title");
const h1_resulto_copy = document.querySelector(".h1_resulto_copy");

first_btn_click.addEventListener('click', function() {
  const lucky_number = Math.random().toFixed(1);
  h1_title.innerHTML=`Your lucky number is ${lucky_number}`;
  //copy
  const copy = h1_title.innerText;
  console.log(copy)
  navigator.clipboard.writeText(lucky_number);

  h1_resulto_copy.innerHTML=`Copy ${lucky_number}`
});



// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
