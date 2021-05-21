// Qual o resultado da seguinte expressão?
// var total = 10 + 5 * 2 / 2 + 20;

const element = document.querySelector(".resul");

const result = 10 + 5 * 2 / 2 + 20;

element.innerText = result;

//Crie duas expressões que retornem NaN

const elementNaN = document.querySelector(".nan");

const result_nan = "nan5"/6;

elementNaN.innerText = result_nan;


// Somar a string '200' com o número 50 e retornar 250

const element_str = document.querySelector(".somastr");

const result_str = +"200" + 50;

element_str.innerText = result_str;


// Incremente o número 5 e retorne o seu valor incrementado

const element_enc = document.querySelector(".encrementar");

var result_enc = 5;
const enc = ++result_enc;
element_enc.innerText = enc;
console.log()

// Como dividir o peso por 2?
//var numero = '80';
//var unidade = 'kg';
//var peso = numero + unidade; // '80kg'
//var pesoPorDois = peso / 2; // NaN (Not a Number)

var numero = '80';
var unidade = 'kg';

const element_div = document.querySelector(".divi");
var peso = (+numero / 2) + unidade

element_div.innerText = peso;
