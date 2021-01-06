const city_api =
  "https://aviation-edge.com/v2/public/cityDatabase?key=a395c2-91cc89";
const country_api =
  "https://aviation-edge.com/v2/public/countryDatabase?key=a395c2-91cc89";
const getCities = (source) => {
  return new Promise((resolve, reject) => {
    fetch(source)
      .then((res) => res.json())
      .then((cities) => {
        let sortedCities = cities.sort((c1, c2) => {
          if (c1.nameCity < c2.nameCity) return -1;
          if (c1.nameCity > c2.nameCity) return 1;
          return 0;
        });
        resolve(sortedCities);
      })
      .catch((e) => {
        console.log("error: ", e);
        reject(e);
      });
  });
};
const getCountries = () => {
  return new Promise((resolve, reject) => {
    fetch(country_api)
      .then((res) => res.json())
      .then((countries) => {
        console.log("countries: ", countries);
        let sortedCountries = countries.sort((c1, c2) => {
          if (c1.nameCity < c2.nameCity) return -1;
          if (c1.nameCity > c2.nameCity) return 1;
          return 0;
        });
        resolve(sortedCountries);
      })
      .catch((e) => {
        console.log("error: ", e);
        reject(e);
      });
  });
};

window.addEventListener("load", () => {
  getCountries().then((countries) => {
    const countriesOrigin = document.querySelector("#origin");
    const countriesDestination = document.querySelector("#destination");
    if (countriesOrigin) {
      if (countries.length) {
        countries.forEach((c) => {
          const el = document.createElement("option");
          el.value = c.codeIso2Country;
          el.text = c.nameCountry;
          countriesOrigin.options.add(el);
        });
      }
      countriesOrigin.addEventListener("change", (e) => {
        let isoCode = e.target.options[e.target.selectedIndex].value;
        getCities(city_api + "&codeIso2Country=" + isoCode).then((cities) => {
          populateCitySpinner("c_origin", cities);
        });
      });
    }
    if (countriesDestination) {
      if (countries.length) {
        countries.forEach((c) => {
          const el = document.createElement("option");
          el.value = c.codeIso2Country;
          el.text = c.nameCountry;
          countriesDestination.options.add(el);
        });
      }
      countriesDestination.addEventListener("change", (e) => {
        let isoCode = e.target.options[e.target.selectedIndex].value;
        getCities(city_api + "&codeIso2Country=" + isoCode).then((cities) => {
          populateCitySpinner("c_destination", cities);
        });
      });
    }
  });
});

//populate city spinner
const populateCitySpinner = (spinnerId, list) => {
  const spinner = document.getElementById(spinnerId);
  spinner.innerHTML = "";
  list.forEach((item) => {
    const el = document.createElement("option");
    el.text = item.nameCity;
    spinner.options.add(el);
  });
};
