// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');


function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

const storyText = 'In the land of Middle-earth, the temperature soared to 94 degrees of Elvish heat. And so, the mighty :insertx: embarked on a journey through the Shire. Upon reaching the legendary realm of :inserty:, a moment of awe befell them, followed by a sudden turn of fate — :insertz:. Gandalf witnessed the entire spectacle, his wise eyes twinkling — for :insertx: carried the weight of 300 pounds, and the sun beat fiercely upon the enchanted lands of Middle-earth.';
const insertX = ['Legolas', 'Bilbon', 'Smaug'];
const insertY = ['Valfenda', 'Condado', 'Bri'];
const insertZ = ['coding in java script', 'whispered through the Elven woods', 'soared on the wings of eagles', 'faded like the morning mist','resonated with the Ents laughter'];


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  let newStory = storyText;

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replaceAll(':inserty:', yItem);
  newStory = newStory.replaceAll(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Gandalf', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = '${Math.round(300*0.0714286)} stone';
    const temperature =  '${Math.round((94-32) * 5 / 9)} centigrade';
    newStory = newStory.replace('94 degrees', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}


/*
ideias de projeto com javascript
declaração de uma função
const imprimir = (str) => {
  console.log(str);
}


const display = str => console.log(str)       // recebe uma string 
const sum = (a,b) => a + b

design pattern book: design patterns building extensible e maintainable oo softtware  authors: eric freeman an elisaeth

const hello = function {
  return "hello word";
}

const hello = function {
  return function () {
    return "hello word";
  }
}

-more simple sintax

funcao de primeira classe - carrinho de compra - algum tipo de desconto - adicionar desconto e funcao q verfica se o desconto 
eh valido


executar prog = node index.js

let funciona apenas dentro da chave 

function foo (){
  if(true){
    leb b="ufam";
    document.writeln(typeod b); // string
  }
  document.writeln(typeof b); // undefined
}

const - n permite alterações




*/