const countries = document.querySelector(".countries");
const select = document.querySelector(".select");
const optionDiv = document.querySelector(".regionName");
const regionArea = document.querySelectorAll(".region-text");
const dark = document.querySelector(".dark-mode");
const moon = document.querySelector(".moon");
dark.addEventListener("click", ()=> {
    document.body.classList.toggle("dark");
    moon.classList.toggle("fa-moon");
})

select.addEventListener("click", ()=> {
    optionDiv.classList.toggle("show");
})

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
                    <h4 class = "countryName">${info.name.common}</h4>
                    <p class="info-para">Population :<span class="info-text">${info.population}</span></p>
                    <p class="info-para ">Region :<span class="info-text nameRegion">${info.region}</span></p>
                    <p class="info-para">Capital :<span class="info-text"></span>${info.capital}</p>
                </div>`
    countries.appendChild(country);
    
}

const nameRegion = document.getElementsByClassName("nameRegion");
regionArea.forEach( (elem)=> {
    elem.addEventListener("click", ()=> {
        Array.from(nameRegion).forEach( (e)=> {
            if(e.innerText.includes(elem.innerText)|| elem.innerText == "All"){
                e.parentElement.parentElement.parentElement.style.display = "flex";
             }else{
                e.parentElement.parentElement.parentElement.style.display = "none";
             }
        })
    })
})

const search = document.getElementById("search-input");
const countryName  = document.getElementsByClassName("countryName")
search.addEventListener("input", ()=> {
    
    Array.from(countryName).forEach( (e)=> {
        if(e.innerText.toLowerCase().includes(search.value.toLowerCase())){
            e.parentElement.parentElement.style.display = "flex";
         }else{
            e.parentElement.parentElement.style.display = "none";
         }
    })
})
