const btnClicked = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQoute(data));
}
const displayQoute = (display) => {
    // console.log(display.quote);
    const displayInput = document.getElementById('quote');
    displayInput.innerText = display.quote;
}