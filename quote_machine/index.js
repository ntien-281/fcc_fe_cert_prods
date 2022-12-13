let quotesData; // this is an array of quotes and it's author
let currentQuote, currentAuthor;
let colorOne, colorTwo;
let degree;

const colors = [
    "#353935",
    "#DAF7A6",
    "#FFC300",
    "#FF5733",
    "#C70039",
    "#900C3F",
    "#CD5C5C",
    "#E9967A",
    "#FFB6C1",
    "#FF6347",
    "#FFA500",
    "#EEE8AA",
    "#EE82EE",
    "#808000",
    "#40E0D0",
    "#B0C4DE"
];

function getQuotes() {
    return $.ajax({
        headers: {
            Accept: 'application/json'
        },
        url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
        success: function (jsonQuotes) {
            if (typeof jsonQuotes === 'string') {
                quotesData = JSON.parse(jsonQuotes);
                quotesData = quotesData.quotes;
            }
        }
    });
}

function getQuote() {
    const randomQuoteIndex = Math.floor(Math.random() * quotesData.length);
    const newQuote = quotesData[randomQuoteIndex];

    currentQuote = newQuote.quote;
    currentAuthor = newQuote.author;

    colorOne = Math.floor(Math.random() * colors.length);
    colorOne = colors[colorOne];
    colorTwo = Math.floor(Math.random() * colors.length);
    colorTwo = colors[colorTwo];
    degree = `${Math.floor(Math.random() * 180)}deg`;

    // Tweeting and Tumblring
    $('#tweet-quote').attr(
        'href',
        'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
            encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
    );
    
    $('#tumblr-quote').attr(
        'href',
        'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
            encodeURIComponent(currentAuthor) +
            '&content=' +
            encodeURIComponent(currentQuote) +
            '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
    );
    
    $('.quote-text').animate({ opacity: 0 }, 600, function () {
        $(this).animate({ opacity: 1 }, 500);
        $('#text').text(currentQuote);
    });
    
    $('.quote-author').animate({ opacity: 0 }, 600, function () {
        $(this).animate({ opacity: 1 }, 500);
        $('#author').html(currentAuthor);
    });

    $('html body').css({
        background: `linear-gradient(${degree}, ${colorOne}, ${colorTwo}`
    });
}

$(document).ready(function() {
    getQuotes().then(res => {
        getQuote();
    })

    $("#new-quote").click(getQuote);
});