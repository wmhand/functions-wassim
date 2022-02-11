const theQuotes = [
    { 
        quote: 'Only the paranoid survive.',
        from: 'Andy Grove'
    },
    { 
        quote: 'We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success',
        from: ' Arianna Huffington'
    },
    { 
        quote: 'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.',
        from: 'Helen Keller'
    },
    { 
        quote: 'Your passion is waiting for your courage to catch up.',
        from: 'Isabelle Lafleche'
    },
];

//document.body.innerHTML += theQuotes[quoteNumber].quote; 
const button = document.querySelector(".generate");
const quote = document.querySelector(".quote");
const from = document.querySelector(".from");
button.addEventListener("click", showQuote);

function showQuote() {
    const quoteNumber = Math.floor(Math.random() * theQuotes.length);
    quote.innerHTML = theQuotes[quoteNumber].quote;
    from.innerHTML = theQuotes[quoteNumber].from;
}   
