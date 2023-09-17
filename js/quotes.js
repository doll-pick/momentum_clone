const quotes = [
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "- Winston Churchill"

    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "- Winston Churchill"

    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "- Albert Schweitzer"

    },
    {
        quote: "The secret to success is to know something nobody else knows.",
        author: "- Aristotle Onassis"

    },
    {
        quote: "Success is not how high you have climbed, but how you make a positive difference to the world.",
        author: "- Roy T. Bennett"

    },
    {
        quote: "Success is not in what you have, but who you are.",
        author: "- Bo Bennett"

    },
    {
        quote: "Success is not the destination, but the road that you're on. Being successful means that you're working hard and walking your walk every day.",
        author: "- Marlon Wayans"

    },
    {
        quote: "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.",
        author: "- Booker T. Washington"

    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "- Henry David Thoreau"

    },
    {
        quote: "Success is not about the destination, it's about the journey.",
        author: "- Zig Ziglar"

    },
    {
        quote: "Success is stumbling from failure to failure with no loss of enthusiasm.",
        author: "- Winston Churchill"

    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)] // Math.random은 0~1사이의 랜덤한 숫자를 준다. , quotes.length는 quotes의 길이를 준다.


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;