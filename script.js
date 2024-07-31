
// const search = document.querySelector("input");
// search.addEventListener("input", findCountries);
const countries = document.querySelector(".countries");

async function findCountries(){
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    console.log(data)
    data.forEach(element => {
        showCountry(element);
    });
}

findCountries();

function showCountry(info){
    const country =  document.createElement("div");
    country.classList.add("country");
    country.innerHTML = 
    `<div class="img-container">
                    <img src="${info.flags.png}" alt="">
                </div>
                <div class="country-info">
                    <h4>${info.name.common}</h4>
                    <p class="info-para">Population :<span class="info-text">${info.population}</span></p>
                    <p class="info-para">Region :<span class="info-text">${info.region}</span></p>
                    <p class="info-para">Capital :<span class="info-text"></span>${info.capital}</p>
                </div>`
    countries.appendChild(country);
    
}