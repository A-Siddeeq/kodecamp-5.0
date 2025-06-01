//CALLING COUNTRIES LIST DIV
const countriesList = document.getElementById("countries-list");
//CALLING REGION FILTER SELECT TAG
const regionSelect = document.getElementById("region-select");
let allCountries = [];

const fetchCountries = () => {
  const countryName = document.querySelector("input").value;

  //CALLING API: CONDITIONAL VARIABLE DECLARATION
  const url =
    countryName !== ""
      ? `https://restcountries.com/v3.1/name/${countryName}`
      : `https://restcountries.com/v3.1/all`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      allCountries = data;
      displayCountries(data);
    })
    .catch((error) => console.error("Error fetching countries:", error));
};

const displayCountries = (countries) => {
  countriesList.innerHTML = "";

  //DISPLAYING EACH COUNTRY DATA USING ForEach()
  countries.forEach((country) => {
    const container = document.querySelector("#countries-list");
    //CREATING A NEW DIV FOR COUNTRIES LIST
    const div = document.createElement("div");
    //INITIALISING NEW DIV AS EMPTY
    div.innerHTML = "";
    //ADDING NEW DIV AS CHILD OF THE COUNTRY LIST DIV CREATED IN HTML FILE
    container.appendChild(div);

    //CREATING A NEW DIV AS CHILD OF PREV CREATED DIV
    info = document.createElement("div");
    div.appendChild(info);

    const flag = document.createElement("img");
    flag.classList.add("lg-img");
    flag.src = country.flags["png"];
    flag.alt = country.flags["alt"];
    div.appendChild(flag);

    const name = document.createElement("h2");
    name.textContent = country.name["common"];
    name.style.maxWidth = "200px";
    name.style.whiteSpace = "nowrap";
    name.style.overflow = "hidden";
    name.style.textOverflow = "ellipsis";
    div.appendChild(name);
    div.classList.add("wrapper");

    const pop = document.createElement("p");
    pop.textContent =
      "Population: " +
      country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    div.appendChild(pop);

    const region = document.createElement("p");
    region.textContent = "Region: " + country.region;
    div.appendChild(region);

    const capital = document.createElement("p");
    capital.textContent = "Capital: " + country.capital;
    capital.style.maxWidth = "200px";
    capital.style.whiteSpace = "nowrap";
    capital.style.overflow = "hidden";
    capital.style.textOverflow = "ellipsis";
    div.appendChild(capital);

    const showCountryInfo = () => {
      countriesList.appendChild(div);

      //CONDITION FOR WHEN A COUNTRY IS CLICKED
      if (
        document.querySelector("section").style.display !== "none" &&
        document.querySelector("main").style.display !== "none"
      ) {
        //JUST DOM MODIFICATIONS
        document.querySelector("section").style.display = "none";
        document.querySelector("main").style.display = "none";
        document.querySelector(".btn-wrapper").style.display = "flex";
        document.querySelector("#country-data").style.display = "block";

        function selectedCountryData() {
          let countryData = document.querySelector("#country-data");
          const [currencyCode, currencyInfo] = Object.entries(
            country.currencies
          )[0];
          //SINGLE CLICKED COUNTRY DATA DISPLAY FORMAT
          countryData.innerHTML = `
                    <div class="wrapper-lg">
                        <div>
                        <img src="${country.flags.png}" alt="${
            country.flags.alt
          }">
                        </div>
                        <div class='info1'><div>
                    <h2>${country.name.common}</h2></div><div>
                    <p>Native Name: ${country.name.official}</p>
                    <p>Popuation: ${country.population
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    <p>Region: ${country.region}</p>
                    <p>Sub Region: ${country.subregion}</p>
                    <p>Capital: ${country.capital}</p>
                    </div>
                    </div>
                    <div>
                    <p>Top-level domain: ${country.tld[0]}</p>
                
                    <p>Currencies: ${currencyCode} - ${currencyInfo.name} (${
            currencyInfo.symbol
          })</p>
                    <p>Languages: ${Object.entries(country.languages)[0]}</p>
                    </div>
                  
                    </div>  <div class='border-countries'>
                        <p><strong>Border Countries: </strong><button> ${
                          country.borders
                            ? country.borders.join(", ")
                            : "Data unknown"
                        }</button></p>
                    </div>`;
        }
        selectedCountryData();
      } else {
        document.querySelector("section").style.display = "none";
        document.querySelector("main").style.display = "none";
      }
    };

    //SHOWING MORE INFO. ABOUT COUNTRY WHEN IT IS CLICKED ON
    div.addEventListener("click", showCountryInfo);
  });
};

//ADDING EVENT ON FILTER/SELECT TAG USAGE
regionSelect.addEventListener("change", (event) => {
  const region = event.target.value;
  const filteredCountries =
    region === "all"
      ? allCountries
      : allCountries.filter((country) => country.region === region);
  displayCountries(filteredCountries);
});

document.querySelector("span").innerHTML = "Dark mode";
document.querySelector("span").addEventListener("click", () => {
  if (document.querySelector("body").classList.contains("light")) {
    document.querySelector("body").classList.remove("light");
    document.querySelector("body").classList.add("dark");
    document.querySelector("span").textContent = "Light mode";
    document.querySelector("span").classList.add("for-light");
    document.querySelector(".back-btn").style.color = "black";
  } else {
    document.querySelector("body").classList.remove("dark");
    document.querySelector("body").classList.add("light");
    document.querySelector("span").textContent = "Dark mode";
    document.querySelector("span").classList.remove("for-light");
  }
});

document.querySelector(".back-btn").addEventListener("click", () => {
  location.reload();
});

fetchCountries();
