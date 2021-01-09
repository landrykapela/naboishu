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

const destinations = [
  {
    id: 0,
    name: "Paris",
    country: "FR",
    desription: "description",
    images: ["paris.jpg", "paris2.jpg"],
  },
  {
    id: 1,
    name: "Dubai",
    country: "AE",
    desription:
      "Dubai is the most tourist attraction destination in United Arab Emirate",
    images: ["dubai.jpg", "dubai2.jpg"],
  },
  {
    id: 2,
    name: "Dar es Salaam",
    country: "TZ",
    desription:
      "Dar es Salaam is by far the largest city and commercial capital of Tanzania, one of the most naturally gifted East African Countries",
    images: ["dsm.jpg", "dsm2.jpg"],
  },
  {
    id: 3,
    name: "Madrid",
    country: "SP",
    desription:
      "Madrid is a wonderful city that is prep ready to give you the best holiday or business travel experience",
    images: ["madrid.jpg", "madrid.jpg"],
  },
];
const loadDestinations = (destinations) => {
  const destView = document.querySelector("#s-destinations");
  const loadSpinner = document.querySelector("#load-spinner");
  const container = document.createElement("div");
  container.classList.add("container");
  destinations.forEach((dest) => {
    const card = document.createElement("div");
    card.id = dest.id;
    card.classList.add("cards");
    card.style.backgroundImage = setCardBackgroundImage(dest.images[0], 0);
    const span = document.createElement("span");
    span.textContent = dest.name;
    card.appendChild(span);
    container.appendChild(card);
  });
  loadSpinner.style.display = "none";
  destView.appendChild(container);
};

//set background iamge
const setCardBackgroundImage = (image, flag = 0) => {
  let url = "images/" + image;
  if (flag !== 0) {
    url = "../../images/" + image;
  }
  return "url('" + url + "')";
};
window.addEventListener("load", () => {
  loadDestinations(destinations);
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
