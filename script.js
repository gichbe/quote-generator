const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

//Loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//LoadingOff
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//Novi Quote
function newQuote(){
    loading();
    
    // Koristi lokalne quotes ako API nije dostupan
    const quotesArray = apiQuotes.length > 0 ? apiQuotes : localQuotes;
    
    //Random quote
    const quote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
    
    //Checkiranje autora
    if(!quote.author){
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }

    //Duzina Quotea
    if(quote.text.length > 120){
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    
    //Set Quote, Hide Loader
    quoteText.textContent = quote.text;
    complete();
}   

async function getQuotes() {
    loading();
    
    // Pokušaj s novim API-jem
    const apiUrl = 'https://api.quotable.io/quotes?limit=150';
    
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            // Transformiraj format da odgovara originalnom
            apiQuotes = data.results.map(quote => ({
                text: quote.content,
                author: quote.author
            }));
            console.log('API quotes loaded successfully');
        } else {
            throw new Error('API response not ok');
        }
    } catch(error) {
        console.log('API failed, using local quotes:', error.message);
        // API ne radi, koristimo lokalne quotes
        apiQuotes = [];
    }
    
    newQuote();
}

//Tweet
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank')
}

//Event Listener
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// Inicijalno učitavanje
getQuotes();