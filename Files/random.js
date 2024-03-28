const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".author .name");
const quoteBtn = document.querySelector("button");

const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote..."
    setTimeout(() => {
        let randIndex = Math.floor((Math.random() * randomQuotes.length));
        let randQuote = randomQuotes[randIndex]
        quoteText.innerText = randQuote.quote;
        authorName.innerText = randQuote.author;
        quoteBtn.innerText = "New Quote"
        quoteBtn.classList.remove("loading");
    }, 800)
    // fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
    //     quoteText.innerText = result.content;
    //     authorName.innerText = result.author;
    //     quoteBtn.innerText = "New Quote"
    //     quoteBtn.classList.remove("loading");
    // })
}

soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
})

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText);
})

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
})

quoteBtn.addEventListener("click", randomQuote)