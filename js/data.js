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
    country: "France",
    continent: "Europe",
    description:
      "Paris is the best city to go for vacation with loved ones. It is a monumental city charcterized by the Efel Tower and many tourist attractions. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    images: ["paris.jpg", "paris2.jpg"],
  },
  {
    id: 1,
    name: "Dubai",
    country: "United Arab Emirate",
    continent: "Asia",
    description:
      "Dubai is the most tourist attraction destination in United Arab Emirate. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    images: ["dubai1.jpg", "dubai2.jpg"],
  },
  {
    id: 2,
    name: "Dar es Salaam",
    country: "Tanzania",
    continent: "Africa",
    description:
      "Dar es Salaam is by far the largest city and commercial capital of Tanzania, one of the most naturally gifted East African Countries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    images: ["dsm.jpg", "dsm2.jpg"],
  },
  {
    id: 3,
    name: "Madrid",
    country: "Spain",
    continent: "Europe",
    description:
      "Madrid is a wonderful city that is prep ready to give you the best holiday or business travel experience. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    images: ["madrid.jpg", "madrid.jpg"],
  },
  {
    id: 4,
    name: "Rio de Janeiro",
    country: "Brazil",
    continent: "South-America",
    description:
      "Rio de Janeiro is the such a great touristic city with sandy beaches and coconuts making it the best destination for a summer holiday. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    images: ["rio_de_janeiro.jpg"],
  },
  {
    id: 5,
    name: "Beijing",
    country: "China",
    continent: "Asia",
    description:
      "Beijing is the capital city of China, the most populated country in the world. It has a great historic reflection showing off the cultural life of the chinese people.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    images: ["beijing.jpg", "wuhan.jpg"],
  },
  {
    id: 6,
    name: "Buenos Aires",
    country: "Argentina",
    continent: "South-America",
    description:
      "Buenos Aires is a city in Argentina, South America with great tourist attractions. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    images: ["buenos_aires.jpg"],
  },
  {
    id: 7,
    name: "Manila",
    country: "Philippines",
    continent: "Asia",
    description:
      "Manila is city in the Philippines characterized by green vegetative mountains through out the year. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    images: ["manila.jpg"],
  },
];
const loadDestinations = (destinations, continent) => {
  let flag = 0;
  const destView = document.querySelector("#s-destinations");
  const loadSpinner = document.querySelector("#load-spinner");
  const container = document.createElement("div");
  container.classList.add("container");
  if (continent !== null && continent !== undefined) {
    destinations = destinations.filter((d) => {
      flag = 1;
      return d.continent.toLowerCase() === continent.toLowerCase();
    });
  }
  destinations.forEach((dest) => {
    const card = document.createElement("div");
    card.id = dest.name;
    card.classList.add("cards");
    card.style.backgroundImage = setCardBackgroundImage(dest.images[0], flag);
    const name = document.createElement("span");
    name.textContent = dest.name;
    const country = document.createElement("span");
    country.textContent = dest.country;
    card.appendChild(name);
    card.appendChild(country);
    container.appendChild(card);

    name.addEventListener("click", (e) => {
      let id = "detail-" + e.target.parentNode.id;
      console.log("card: ", id);
      if (flag === 0) {
        window.location.pathname =
          "/destinations/" + dest.continent + "/#" + id;
      } else {
        window.location.hash = id;
      }
    });
    country.addEventListener("click", (e) => {
      let id = "detail-" + e.target.parentNode.id;
      console.log("card: ", id);
      if (flag === 0) {
        window.location.pathname =
          "/destinations/" + dest.continent + "/#" + id;
      } else {
        window.location.hash = id;
      }
    });
  });
  loadSpinner.style.display = "none";
  destView.appendChild(container);

  if (flag !== 0) {
    destinations.filter((d) => {
      return d.continent.toLowerCase() === continent.toLowerCase();
    });
    var details = document.querySelector("#details");
    destinations.forEach((d) => {
      const content = document.createElement("div");
      content.classList.add("content");
      content.id = "detail-" + d.name;
      const detail = document.createElement("div");
      detail.classList.add("detail");
      const heading = document.createElement("h4");
      heading.classList.add("medium-text");
      heading.textContent = d.name + ", " + d.country;
      detail.appendChild(heading);
      const description = document.createElement("p");
      description.textContent = d.description;
      // content.appendChild(description);
      const featImage = document.createElement("img");
      featImage.classList.add("feature");
      featImage.alt = d.name;
      featImage.src = "../../images/" + d.images[0];
      content.appendChild(featImage);
      detail.appendChild(description);
      content.appendChild(detail);
      details.appendChild(content);
    });
  }
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
  let continent = null;
  let pathname = window.location.pathname;
  if (pathname.includes("/destinations/")) {
    let parts = pathname.split("/");
    continent = parts[parts.length - 2];
    console.log("continent: ", continent);
  }
  loadDestinations(destinations, continent);
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
