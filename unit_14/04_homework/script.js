const param = {
  url: "https://api.openweathermap.org/data/2.5/",
  API_call_name: "weather?q=",
  API_call_id: "weather?id=",
  API_KEY: "efdb442195f69dbe4dc90e0eb776db7e",
  lang: "ru",
};

const cities = {
  698740: "Одесса",
  703448: "Киев",
  6058560: "Лондон",
  3996063: "Мехико",
  4876353: "Сидней",
};

function getWeather() {
  let cityId = document.querySelector("#city_list").value;

  fetch(
    `${param.url}${param.API_call_id}${cityId}&appid=${param.API_KEY}&lang=${param.lang}`
  )
    .then((resultRespond) => {
      return resultRespond.json();
    })
    .then(showWeather);
}

function showWeather(data) {
  document.querySelector(".weather__city").textContent = data.name;
  document.querySelector(
    ".weather__icon"
  ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
  document.querySelector(".weather__temp").innerHTML =
    Math.round(data.main.temp - 273) + "&deg;C";
  document.querySelector(".weather__desc").innerHTML = createListWeatherDesc(
    data
  );
}
function createListOption() {
  let blokSelect = document.querySelector(".weather__select");

  for (const key in cities) {
    let createOption = document.createElement("option");

    createOption.setAttribute("value", key);
    createOption.textContent = cities[key];
    blokSelect.append(createOption);

    if (cities[key] === "Одесса") {
      createOption.setAttribute("value", key);
      createOption.setAttribute("selected", "");
    }
  }
}


function createListWeatherDesc(data) {
  let obj = {
    key0: data.weather[0]["description"],
    key1: `чувствуется как ${Math.round(data.main.temp - 273)}&deg;C`,
    key2: `давление ${data.main.pressure - 243}мм рт.ст.`,
  };
  let out = "";
  for (const key in obj) {
    out += `${obj[key]} <br>`;
  }
  return out;
}

createListOption();

document.querySelector("#city_list").onchange = getWeather;
getWeather();


