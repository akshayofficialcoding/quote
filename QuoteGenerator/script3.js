const quoteText = document.querySelector(".quote"),
    authorName = document.querySelector(".name"),
    wordsLength = document.querySelector(".length"),
    copyText = document.querySelector(".copy"),
    quoteBtn = document.querySelector("button");

function randomQuote() {
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result)
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        wordsLength.innerText = `${result.length} Alphabets`;

    });
}

copyText.addEventListener("click", () => {
    navigator.clipboard.writeText(`${quoteText.innerText}`)
})

quoteBtn.addEventListener("click", randomQuote);