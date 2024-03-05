const quoteCotainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText  = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const linkedinBtn = document.getElementById('linkedin');
// const loader = document.getElementById('loader');

let apiQuotes = [];

// loading func
// function loading(){
//   loader.hidden= false;
//   quoteContainer.hidden=true;
// }

// // hide loading
// function complete(){
//   quoteCotainer.hidden=false;
//   loader.hidden=true;
// }

//Show new quote
function newQuote() {
  // loading();
  //pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // console.log(quote);


  //check if author field is blank then put value of 'Unknown'
  if(!quote.author) {
    authorText.textContent = 'Unknown';
  }else{
    authorText.textContent = quote.author;
  }
  
  //if our quote length is really long
  if(quote.text.length>50){
    quoteText.classList.add('long-quote');
  }else{
    quoteText.classList.remove('long-quote');
  }
  quoteText.textContent = quote.text;
  // complete();
}

// Get Quotes From API
async function getQuotes() {
  // loading();
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.log(error)
}
}


//tweet a quote
function tweetQuote(){
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl,'_blank');
}
//linkedin
function linkedinQuote(){
  const linkedinUrl = `https://www.linkedin.com/notifications/?filter=all`;
  window.open(linkedinUrl,'_blank');
}

//event listener
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);
linkedinBtn.addEventListener('click',linkedinQuote);
// on Load
 getQuotes();
