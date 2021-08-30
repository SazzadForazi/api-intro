const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountrys(data))
}
loadCountries();
const displayCountrys = (data) => {
    // console.log(data);
    for (const country of data) {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        const displayInput = document.getElementById('countries');

        div.innerHTML = `
             <h3>${country.name}</h3>
             <p>${country.capital}</p>
             <button onclick="loadCountry('${country.name}')">Details</button>
        `
        displayInput.appendChild(div);

        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // div.appendChild(h3);
        // const p = document.createElement("p");
        // p.innerText = country.capital
        // div.appendChild(p);
        // displayInput.appendChild(div);

    }
}

const loadCountry = countryName => {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {
    // console.log(country);
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
    <h5>${country.name}</h5>
    <p>${country.population}</p>
    <img width ='200px' src="${country.flag}">
    
    `
}