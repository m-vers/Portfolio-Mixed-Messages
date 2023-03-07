//Quote Array
let  quotes = ["Moonlight drowns out all but the brightest stars.",
  "It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.",
  "It's the job that's never started as takes longest to finish.",
  "Home is behind, the world ahead, and there are many paths to tread through shadows to the edge of night, until the stars are all alight.",
  "Frodo: I wish the Ring had never come to me. I wish none of this had happened. Gandalf: So do all who live to see such times, but that is not for them to decide. All we have to decide is what to do with the time that is given to us.", 
  "I am old, Gandalf. I don't look it, but I am beginning to feel it in my heart of hearts. Well-preserved indeed! Why, I feel all thin, sort of stretched, if you know what I mean: like butter that has been scraped over too much bread. That can't be right. I need a change, or something.",
  "The world is indeed full of peril and in it there are many dark places.",
  "Someone else always has to carry on the story.",
  "Do not scorn pity that is the gift of a gentle heart, Éowyn!",
  "Even the smallest person can change the course of the future.",
  "Deeds will not be less valiant because they are unpraised."
]

//Grab quotes from Array
let button = document.getElementById('lotrButton');

let quote = document.getElementById('lotr');

function quoteSelector(){
  let randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
};

function showQuote(){
  quote.innerHTML = quoteSelector() + '   -   J.R.R. Tolkien';
  quote.style.display = "block";
};

button.addEventListener('click', showQuote);

// //Add Quotes to Array
let quoteFormInfo = [];
// ex. {email: something@gmail.com, date: 123456, quote: 'some quote}
const addQuoteInfo = (ev) => {
  ev.preventDefault(); //stop form submittal
  let quoteInfo = document.getElementById('textToArray').value;
  quoteFormInfo.push(quoteInfo);
  document.forms[0].reset(); // clear form for next entry
}

// locale storage
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('sendButton').addEventListener('click', addQuoteInfo)
});

let secondButton = document.getElementById('sendButton');

function addQuoteToArray() {
  for(let i = 0; i < quoteFormInfo.length; i++) {
  quotes.push(quoteFormInfo[i]);
  }
};

secondButton.addEventListener('click', addQuoteToArray);

//Button Events
button.addEventListener('mousedown', () => {
  button.style.backgroundColor = 'grey';
});

button.addEventListener ('mouseup', () => {
  button.style.backgroundColor = '#F9F9F9';
});

secondButton.addEventListener('mousedown', () => {
  secondButton.style.backgroundColor = 'grey';
});

secondButton.addEventListener ('mouseup', () => {
  secondButton.style.backgroundColor = '#F9F9F9';
});