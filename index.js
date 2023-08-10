const quoteText = document.querySelector('.quote');
const quoteBtn = document.querySelector('button');
const author = document.querySelector('.name');
const soundBtn = document.querySelector('.sound');
const copyBtn = document.querySelector('.copy');
const twitterBtn = document.querySelector('.twitter');

function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    //fetching random quotes/data from the API and parsing it into JavaScript object
    fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(result => {
      quoteText.innerText = result.content;
      author.innerText = result.author;
      quoteBtn.innerText = "New Quote";
      quoteBtn.classList.remove("loading");
    });
}

soundBtn.addEventListener('click',()=>{
    //the SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${author.innerText}`);
    speechSynthesis.speak(utterance); // speak method of speechSynthesis speaks the utterance
});

copyBtn.addEventListener('click',()=>{
    //copying the quote text on copyBtn click
    //writeText() property writes the specified text string to the system clipboard;
    navigator.clipboard.writeText(quoteText.innerText)
});

twitterBtn.addEventListener('click',()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl,"_blank");
});

quoteBtn.addEventListener('click',randomQuote);
