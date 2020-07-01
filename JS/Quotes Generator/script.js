const quotes = [
    {
        name: "Nelson Mandela",
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."
},
    {
        name: "Steve Jobs",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
},
    {
        name: "Eleanor Roosevelt",
        quote: "If life were predictable it would cease to be life, and be without flavor."
},
    {
        name: "Oprah Winfrey",
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."
},
    {
        name: "Margaret Mead",
        quote: "Always remember that you are absolutely unique. Just like everyone else."
},
    {
        name: "Benjamin Franklin",
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn."
},
    {
        name: "Aristotle",
        quote: "It is during our darkest moments that we must focus to see the light."
},
    {
        name: "Ralph Waldo Emerson",
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail."
},
    {
        name:"Maya Angelou",
        quote: "You will face many defeats in life, but never let yourself be defeated."
},
    {
        name: "Steve Jobs",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma -- which is living with the results of other people's thinking."
}
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}

