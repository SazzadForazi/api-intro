const loadQoutes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}
const displayQuote = qoute => {
    // console.log(qoute);
    const qouteElement = document.getElementById('quote');
    qouteElement.innerText = qoute.quote;
}